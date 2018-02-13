import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Fiche } from '../../_models/index';
import { Observable } from 'rxjs/Observable';
import { FicheService } from '../../_services/index';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.css']
})
export class FicheComponent implements OnInit {

  fiche;

  dataLoaded: Boolean;

  private selectedId: number;

  readFicheService : ISubscription;

  constructor( private route: ActivatedRoute, private ficheService: FicheService) { 
    this.dataLoaded = false;
  }

  ngOnInit() {
   this.getFiche();
  }

  private getFiche() {
     // get the currentFiche id to edit
     this.readFicheService = this.ficheService.currentFiche.flatMap((result)=>{
      this.selectedId = result;
      // get the currentFiche by the id
      if(result != -1){
        return this.ficheService.getById(this.selectedId);
      }
      else{
        return Observable.of(new Fiche());
      }
    }).subscribe(fiche=> {
        this.dataLoaded = true;
        this.fiche = fiche;
      }); 
  }

  ngOnDestroy(){
    this.readFicheService.unsubscribe(); 
  }
}
