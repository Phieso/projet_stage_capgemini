import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Injectable } from '@angular/core';

@Component({
  selector: 'app-fiche-sante-commentaire',
  templateUrl: './fiche-sante-commentaire.component.html',
  styleUrls: ['./fiche-sante-commentaire.component.css']
})

@Injectable()
export class FicheSanteCommentaireComponent implements OnInit {

  num: number = 0;
  
  addRow() {
    this.num++;
  }
  
  getNum() {
    return this.num;
  }

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

}
