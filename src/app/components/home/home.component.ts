import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';   
import { FicheService } from '../../_services/index';
import { Fiche } from '../../_models/index';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fiches : Fiche[];

  readFicheService : ISubscription;

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private ficheService: FicheService
  ) { }

  ngOnInit() {
   this.getAllFiches();
  }

  private getAllFiches(){
     this.readFicheService = this.ficheService.getAll().subscribe(fiches => this.fiches = fiches);
  }

  goToEditFiche(id){
    this.ficheService.changeFiche(id);
    this.router.navigate(['fiche/profil']);
  }

  ngOnDestroy(){
    this.readFicheService.unsubscribe();
  }
}
