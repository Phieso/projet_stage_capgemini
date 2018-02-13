import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfilService, FicheService } from '../../../_services/index';
import { Observable } from 'rxjs/Observable';
import { Profil } from '../../../_models/index';
import 'rxjs/add/operator/mergeMap';
import { ISubscription } from "rxjs/Subscription";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../fiche.component.css']
})
export class ProfileComponent implements OnInit {
  
  // Pour ajout de lignes, pas clean
  numCont: number = 0;
  
  addContrat() {
    this.numCont++;
  }
  
  numEt: number = 0;
  numEtShow: number = this.numEt + 1;
  
  addEtape() {
    this.numEt++;
  }
  // Fin ajout de lignes pas clean
  
  constructor(private profilService: ProfilService, private ficheService: FicheService) { 
    this.dataLoaded = false;
  }

  readProfilService : ISubscription;

  profil: Profil;

  dataLoaded: boolean;
  

  ngOnInit() {
    this.getProfil();
  }

  private getProfil() {
    // get the currentFiche id to edit
    this.readProfilService= this.ficheService.currentFiche.flatMap((idFiche)=>{
      if(idFiche != -1){
        return this.profilService.getById(idFiche);
      }
      else{
        return Observable.of(new Profil());
      }
      }
    ).subscribe((profil)=>{
      this.profil = profil;
      this.dataLoaded = true;
    });
  }

  onSubmit(){
    
  }

  ngOnDestroy() {
    this.readProfilService.unsubscribe(); //to fix memory leak
  }
}
