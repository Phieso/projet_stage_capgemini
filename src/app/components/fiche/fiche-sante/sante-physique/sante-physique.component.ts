import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-sante-physique',
  templateUrl: './sante-physique.component.html',
  styleUrls: ['./sante-physique.component.css']
})

@Injectable()
export class SantePhysiqueComponent implements OnInit {
  // Not useful right now
  num: number = 0;
  maxLineMeeting:any[] = [0, 1, 2, 3, 4, 5, 6];
  
  addRow() {
    this.num++;
  }

  constructor() { }

  ngOnInit() {
  }

}
