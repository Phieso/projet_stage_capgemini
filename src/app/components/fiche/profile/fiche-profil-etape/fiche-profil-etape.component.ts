import { Component, OnInit } from '@angular/core';

import { ProfileComponent } from '../profile.component';

@Component({
  selector: 'app-fiche-profil-etape',
  templateUrl: './fiche-profil-etape.component.html',
  styleUrls: ['../../fiche.component.css']
})
export class FicheProfilEtapeComponent implements OnInit {
  
  
  constructor(private profileComponent: ProfileComponent) { }

  numEtShow: number = this.profileComponent.numEt + 1;
  
  ngOnInit() {
  }

}
