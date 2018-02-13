import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-fiche-administration',
  templateUrl: './fiche-administration.component.html',
  styleUrls: ['../fiche.component.css']
})

export class FicheAdministrationComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { 
    

  }

  ngOnInit() {
  }

  goToAdmiss()
  {
    this.router.navigate(['fiche/administration/admission']);
  }
  
  goToDurant()
  {
    this.router.navigate(['fiche/administration/durant']);
  }

  goToSortie()
  {
    this.router.navigate(['fiche/administration/sortie']);
  }

}
