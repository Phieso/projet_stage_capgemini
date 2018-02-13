import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { slideInDownAnimation } from '../../../../animations';

@Component({
  selector: 'app-fiche-administration-admission',
  template: `
    <section class="admission">
        <header class="row">
            <h2>ADMISSION</h2>
        </header>
        
        <app-fiche-administration-questionnaire></app-fiche-administration-questionnaire>
    </section>
  `,
  styleUrls: ['../../fiche.component.css']
})

export class FicheAdministrationAdmissionComponent implements OnInit {

  constructor() {
    
  }

  ngOnInit(): void {
    
  }

}
