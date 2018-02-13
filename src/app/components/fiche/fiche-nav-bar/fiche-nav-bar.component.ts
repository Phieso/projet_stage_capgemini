import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';   

@Component({
  selector: 'fiche-nav-bar',
  templateUrl: './fiche-nav-bar.component.html',
  styleUrls: ['./fiche-nav-bar.component.css']
})
export class FicheNavBarComponent implements OnInit {
  
  
  constructor(private route: ActivatedRoute, private router: Router) { 
  }
  
  public adminIsActivated = "nav-item nav-link navbar-link-fiche dropdown-toggle dropdown show col";
  public santeIsActivated = "nav-item nav-link navbar-link-fiche dropdown-toggle dropdown show col";

  toggleClass() {
    if (this.router.url === '/fiche/administration/admission' || this.router.url === '/fiche/administration/durant' || this.router.url === '/fiche/administration/sortie') {
        this.adminIsActivated = "dropdown-item-active nav-item nav-link navbar-link-fiche dropdown-toggle dropdown show col";
    } else {
        this.adminIsActivated = "nav-item nav-link navbar-link-fiche dropdown-toggle dropdown show col";
    }
    
    if(this.router.url === '/fiche/sante/psy' || this.router.url === '/fiche/sante/physique')
        this.santeIsActivated = "dropdown-item-active nav-item nav-link navbar-link-fiche dropdown-toggle dropdown show col";
    else {
        this.santeIsActivated = "nav-item nav-link navbar-link-fiche dropdown-toggle dropdown show col";
    }
  }
        
  ngOnInit() {
  }

  goToProfil()
  {
    this.router.navigate(['fiche/profil']);
  }

  goToSante()
  {
    this.router.navigate(['fiche/sante']);
  }
}
