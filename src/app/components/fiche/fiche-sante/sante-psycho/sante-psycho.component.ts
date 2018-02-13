import { Component, OnInit, Inject } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-sante-psycho',
  templateUrl: './sante-psycho.component.html',
  styleUrls: ['./sante-psycho.component.css']
})

@Injectable()
export class SantePsychoComponent implements OnInit {
  // Not useful right now
  num: number = 0;
  maxLinesPsyMeeting:any[] = [0, 1, 2, 3, 4, 5, 6];
  
  addRow() {
    this.num++;
  }

  constructor() { }

  ngOnInit() {
  }

}
