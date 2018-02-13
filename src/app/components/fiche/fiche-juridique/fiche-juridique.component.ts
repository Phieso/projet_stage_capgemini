import { Component, OnInit, OnDestroy } from '@angular/core';

import { ProfilService, FicheService, JuridiqueService } from '../../../_services/index';
import { Profil, Juridique } from '../../../_models/index';

import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/mergeMap';
import { ISubscription } from "rxjs/Subscription";

@Component({
  selector: 'app-fiche-juridique',
  templateUrl: './fiche-juridique.component.html',
  styleUrls: ['../fiche.component.css']
})

@Injectable()
export class FicheJuridiqueComponent implements OnInit {
  
  // Not useful right now
  num: number = 0;
  
  addRow() {
    this.num++;
  }
  
  
  constructor(private profilService: ProfilService, private juridiqueService: JuridiqueService, private ficheService: FicheService) { 
    this.dataLoaded = false;
  }

  readProfilService: ISubscription;

  profil: Profil;
  juridique: Juridique;

  dataLoaded: boolean;
  
  plainte: boolean;

  ngOnInit() {
        // get the currentFiche id to edit
        this.readProfilService= this.ficheService.currentFiche.flatMap((idFiche)=>{
            if(idFiche != -1){
              return this.juridiqueService.getById(idFiche);
            }
            else{
              return Observable.of(new Juridique());
            }
          }
        ).subscribe((jurid)=>{
          this.juridique = jurid;
          this.dataLoaded = true;
          
          // Fry's test
          // this.juridique = profil;
          console.log(this.juridique);
        });
  }

  onSubmit(){
    console.log(this.profil);
    console.log(this.juridique);
  }

  ngOnDestroy() {
    this.readProfilService.unsubscribe(); //to fix memory leak
  }
}
