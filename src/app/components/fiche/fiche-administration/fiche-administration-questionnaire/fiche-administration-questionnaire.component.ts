import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fiche-administration-questionnaire',
  template: `
    <app-fiche-administration-questionnaire-situation></app-fiche-administration-questionnaire-situation>
    <app-fiche-administration-questionnaire-droits></app-fiche-administration-questionnaire-droits>
    <app-fiche-administration-questionnaire-suivi></app-fiche-administration-questionnaire-suivi>
  `,
  styleUrls: ['../../fiche.component.css']
})
export class FicheAdministrationQuestionnaireComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
