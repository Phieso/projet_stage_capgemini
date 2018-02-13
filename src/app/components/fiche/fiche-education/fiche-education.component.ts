import { Component, OnInit, OnDestroy } from '@angular/core';

import { ProfilService, FicheService, EducationService } from '../../../_services/index';
import { Profil, Education } from '../../../_models/index';

import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/mergeMap';
import { ISubscription } from "rxjs/Subscription";

@Component({
  selector: 'app-fiche-education',
  templateUrl: './fiche-education.component.html',
  styleUrls: ['../fiche.component.css']
})

@Injectable()
export class FicheEducationComponent implements OnInit {
  
  // Not useful right now
  num: number = 0;
  
  addRow() {
    this.num++;
  }
  
  
  constructor(private profilService: ProfilService, private educationService: EducationService, private ficheService: FicheService) { 
    this.dataLoaded = false;
  }

  readProfilService: ISubscription;

  profil: Profil;
  education: Education;

  dataLoaded: boolean;
  
  ngOnInit() {
        // get the currentFiche id to edit
        this.readProfilService= this.ficheService.currentFiche.flatMap((idFiche)=>{
            if(idFiche != -1){
              return this.educationService.getById(idFiche);
            }
            else{
              return Observable.of(new Education());
            }
          }
        ).subscribe((educ)=>{
          this.education = educ;
          this.dataLoaded = true;
          
        });
  }

  onSubmit(){
  }

  ngOnDestroy() {
    this.readProfilService.unsubscribe(); //to fix memory leak
  }
}