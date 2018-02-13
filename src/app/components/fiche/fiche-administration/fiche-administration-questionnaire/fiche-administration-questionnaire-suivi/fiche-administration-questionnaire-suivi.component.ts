import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fiche-administration-questionnaire-suivi',
  template: `
    <div class="container form-group" *ngIf="router.url === '/fiche/administration/admission' || router.url === '/fiche/administration/durant'">
        <section class="suivi">
            <fieldset>
                <legend>Suivi social antérieur</legend>

                <form action="" method="post" class="suivi-form">
                    <section class="suivi-oui col">
                        <input type="radio" [(ngModel)]="show" name="suivi" id="suivi-oui" value="true">
                        <label for="suivi-oui">Oui</label>
                        <input type="radio" [(ngModel)]="show" name="suivi" id="suivi-non" value="false">
                        <label for="suivi-non">Non</label>
                        <br>
                        <section *ngIf="show === 'true'">
                            <label for="suivi-commentaires">Commentaires :</label>
                            <textarea class="form-control" name="suivi" id="suivi-commentaires" cols="50" rows="5"></textarea>
                        </section>
                    </section>

                </form>
            </fieldset>
        </section>
    </div>
  `,
  styleUrls: ['../../../fiche.component.css']
})
export class FicheAdministrationQuestionnaireSuiviComponent implements OnInit {

  show: Boolean = false;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
