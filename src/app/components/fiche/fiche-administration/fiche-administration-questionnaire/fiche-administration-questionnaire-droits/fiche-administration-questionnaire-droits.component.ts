import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fiche-administration-questionnaire-droits',
  template: `
    <div class="container form-group" *ngIf="router.url === '/fiche/administration/admission' || router.url === '/fiche/administration/durant'">
        <section class="ouverture">
            <fieldset>
                <legend>Ouverture de droits</legend>

                <form action="" method="post" class="ouverture-form">
                    <div class="row ouverture-form-ame">
                        <fieldset class="col">
                            <legend>Couverture médicale AME</legend>

                            <section class="ame col">
                                <input type="radio" [(ngModel)]="showAme" name="ame" id="ame-oui" value="true">
                                <label for="ame-oui">  Oui</label>
                                <input type="radio" [(ngModel)]="showAme" [(ngModel)]="showAmeNot" name="ame" id="ame-non" value="false">
                                <label for="ame-non">  Non</label>
                                <br>
                                
                                <section class="row" *ngIf="showAme === 'true'">
                                    <label class="col" for="ame-droits">Droits en cours :</label>
                                    <div class="col">
                                        <label for="ame-debut">Début des droits :</label>
                                        <input class="form-control" type="date" name="ame-debut" id="ame-debut">
                                    </div>
                                    <div class="col">
                                        <label for="fin">Fin des droits :</label>
                                        <input class="form-control" type="date" name="ame-fin" id="ame-fin">
                                    </div>
                                </section>
                                
                                <section class="row" *ngIf="showAmeNot === 'false' && showAme === 'false'">
                                    <div class="col">
                                        <input type="checkbox" name="ame-premiere" id="ame-premiere" value="ame-premiere">
                                        <label for="ame-premiere">Première demande :</label>
                                        <label for="ame-premiere-date">Dépot dossier le :</label>
                                        <input class="form-control" type="date" name="ame-premiere-date" id="ame-premiere-date">
                                    </div>
                                    <div class="col">
                                        <input type="checkbox" name="ame-renouvellement" id="ame-renouvellement" value="ame-renouvellement">
                                        <label for="ame-renouvellement">Renouvellement :</label>
                                        <label for="ame-renouvellement">Dépot dossier le :</label>
                                        <input class="form-control" type="date" name="ame-renouvellement-date" id="ame-renouvellement-date">
                                    </div>
                                </section>
                            </section>

                        </fieldset>
                    </div>

                    <div class="row ouverture-form-cmu">
                        <fieldset class="col">

                            <legend>Couverture médicale CMU</legend>

                            <section class="cmu col">
                                <input type="radio" [(ngModel)]="showCmu" name="cmu" id="cmu-oui" value="true">
                                <label for="cmu-oui">  Oui</label>
                                <input type="radio" [(ngModel)]="showCmu" [(ngModel)]="showCmuNot" name="cmu" id="cmu-non" value="false">
                                <label for="cmu-non">  Non</label>
                                <br>
                                <section class="row" *ngIf="showCmu === 'true'">
                                    <label class="col" for="cmu-droits">Droits en cours :</label>
                                    <div class="col">
                                        <label for="cmu-debut">Début des droits :</label>
                                        <input class="form-control" type="date" name="cmu-debut" id="cmu-debut">
                                    </div>
                                    <div class="col">
                                        <label for="fin">Fin des droits :</label>
                                        <input class="form-control" type="date" name="cmu-fin" id="cmu-fin">
                                    </div>
                                </section>
                                <section class="row" *ngIf="showCmuNot === 'false' && showCmu === 'false'">
                                    <div class="col">
                                        <input type="checkbox" name="cmu-premiere" id="cmu-premiere" value="cmu-premiere">
                                        <label for="cmu-premiere">Première demande :</label>
                                        <label for="cmu-premiere-date">Dépot dossier le :</label>
                                        <input class="form-control" type="date" name="cmu-premiere-date" id="cmu-premiere-date">
                                    </div>
                                    <div class="col">
                                        <input type="checkbox" name="cmu-renouvellement" id="cmu-renouvellement" value="cmu-renouvellement">
                                        <label for="cmu-renouvellement">Renouvellement :</label>
                                        <label for="cmu-renouvellement">Dépot dossier le :</label>
                                        <input class="form-control" type="date" name="cmu-renouvellement-date" id="cmu-renouvellement-date">
                                    </div>
                                </section>
                            </section>

                        </fieldset>
                    </div>

                    <div class="row ouverture-form-logement">
                        <fieldset class="col">
                            <legend>Recherche de logement</legend>

                            <section class="logement col">
                                <input type="radio" [(ngModel)]="showSiao" name="logement" id="logement-oui" value="true">
                                <label for="logement-oui">  Oui</label>
                                <input type="radio" [(ngModel)]="showSiao" [(ngModel)]="showSiaoNot" name="logement" id="logement-non" value="false">
                                <label for="logement-non">  Non</label>
                                <br>
                                <section class="col" *ngIf="showSiao === 'true'">
                                    <fieldset>
                                        <legend>Demande de SIAO</legend>
                                        <section class="col">
                                            <label for="siao-oui"><input type="radio" [(ngModel)]="showSiaoDoss" name="siao" id="siao-oui" value="true">  Oui </label>
                                            <label for="siao-non"> <input type="radio" [(ngModel)]="showSiaoDoss" name="siao" id="siao-non" value="false">  Non</label>
                                            <section *ngIf="showSiaoDoss === 'true'">
                                                <label for="siao">Dépot dossier le :</label>
                                                <input class="form-control" type="date" name="siao-date" id="siao-date">
                                            </section>
                                        </section>

                                    </fieldset>
                                </section>
                            </section>

                        </fieldset>
                    </div>
                </form>
            </fieldset>
        </section>
    </div>
  `,
  styleUrls: ['../../../fiche.component.css']
})
export class FicheAdministrationQuestionnaireDroitsComponent implements OnInit {

  showAme: Boolean = false;
  showCmu: Boolean = false;
  showSiao: Boolean = false;
  showSiaoDoss: Boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
