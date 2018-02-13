import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fiche-administration-sortie',
  template: `
    <section class="sortie">
        <header class="row">
            <h2>SORTIE</h2>
        </header>
        
        <app-fiche-administration-questionnaire></app-fiche-administration-questionnaire>
    </section>
  `,
  styleUrls: ['../../fiche.component.css']
})
export class FicheAdministrationSortieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
