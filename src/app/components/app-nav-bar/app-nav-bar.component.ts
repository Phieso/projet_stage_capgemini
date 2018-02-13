import { Component, OnInit } from '@angular/core';
import { FicheService, Mode, AuthenticationService } from '../../_services/index';
import { Router, ActivatedRoute } from '@angular/router';   

@Component({
  selector: 'app-nav-bar',
  templateUrl: './app-nav-bar.component.html',
  styleUrls: ['./app-nav-bar.component.css']
})
export class AppNavBarComponent implements OnInit {

  constructor(private ficheService : FicheService,
    private route: ActivatedRoute, private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  isAuthenticated(){
    return this.authenticationService.isAuthenticated();
  }

  createNewFiche()
  {
    //create new Fiche
    this.ficheService.changeModeFiche(Mode.new);
    this.ficheService.changeFiche(-1);
    this.router.navigate(['fiche/profil']);
  }

  logout()
  {
    this.router.navigate(['']);
  }
}
