import { Component, OnInit, OnDestroy } from '@angular/core';

import { ProfilService, FicheService, FoyerService } from '../../../_services/index';
import { Profil, Foyer } from '../../../_models/index';

import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/mergeMap';
import { ISubscription } from "rxjs/Subscription";

@Component({
  selector: 'app-fiche-foyer',
  templateUrl: './fiche-foyer.component.html',
  styleUrls: ['../fiche.component.css']
})

@Injectable()
export class FicheFoyerComponent implements OnInit {

  // Not useful right now
  num: number = 0;
  
  addRow() {
    this.num++;
  }
  
  
  constructor(private profilService: ProfilService, private foyerService: FoyerService, private ficheService: FicheService) { 
    this.dataLoaded = false;
  }

  readProfilService: ISubscription;

  profil: Profil;
  foyer: Foyer;

  dataLoaded: boolean;

  ngOnInit() {
        // get the currentFiche id to edit
        this.readProfilService= this.ficheService.currentFiche.flatMap((idFiche)=>{
            if(idFiche != -1){
              return this.foyerService.getById(idFiche);
            }
            else{
              return Observable.of(new Foyer());
            }
          }
        ).subscribe((foyer)=>{
          this.foyer = foyer;
          this.dataLoaded = true;
          
          // Fry's test
          console.log(this.foyer);
        });
  }
  

  onSubmit(){
    console.log(this.profil);
    console.log(this.foyer);
  }

  ngOnDestroy() {
    this.readProfilService.unsubscribe(); //to fix memory leak
  }
}
