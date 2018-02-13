import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'fiche-commun',
  templateUrl: './fiche-commun.component.html',
  styleUrls: ['./fiche-commun.component.css']
})
export class FicheCommunComponent implements OnInit {
  
  @Input()
  fiche;

  defaultString='';

  constructor() { }
  ngOnInit() {
  
  }


}
