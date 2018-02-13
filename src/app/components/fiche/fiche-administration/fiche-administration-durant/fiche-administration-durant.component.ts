import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fiche-administration-durant',
  template: `
    <section class="durant">
        <header class="row">
            <h2>DURANT LE SEJOUR</h2>
        </header>
        
        <app-fiche-administration-questionnaire></app-fiche-administration-questionnaire>
    </section>
  `,
  styleUrls: ['../../fiche.component.css']
})
export class FicheAdministrationDurantComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
