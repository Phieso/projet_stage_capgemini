import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fiche-administration-questionnaire-situation',
  template: `
    <div class="container form-group">
        <section class=" arrivee">
            <fieldset>
                <legend *ngIf="router.url === '/fiche/administration/admission'">Situation administrative à l'arrivée</legend>
                <legend *ngIf="router.url === '/fiche/administration/durant'">Situation administrative en cours</legend>
                <legend *ngIf="router.url === '/fiche/administration/sortie'">Situation administrative à la sortie</legend>

                <form action="" method="post" class="arrivee-form">
                    <div class="row">
                        <label for="situation" class="col-12">Situation : </label>
                        <div class="row col">
                            <div class="radio-inline col-md-2">
                                <label for="reguliere"><input type="radio" name="situation" id="reguliere" value="reguliere">  Régulière</label>
                            </div>
                            <div class="radio-inline col-md-2">
                                <label for="irreguliere"><input type="radio" name="situation" id="irreguliere" value="irreguliere">  Irrégulière</label>
                            </div>
                            <div class="radio-inline col-md-4">
                                <label for="en-cours"><input type="radio" name="situation" id="en-cours" value="en-cours">  En cours de régularisation</label>
                            </div>
                        </div>
                    </div>

                    <div class="row arrivee-form-document">
                        <label class="row col-12" for="document">Document d'identité :</label>
                        <div class="row col">
                            <div class="radio-inline col-md-2">
                                
                                <label for="cni"><input type="checkbox" name="document" id="cni" value="cni">  CNI</label>
                            </div>
                            <div class="radio-inline col-md-2">
                                
                                <label for="passeport"><input type="checkbox" name="document" id="passeport" value="passeport">  Passeport</label>
                            </div>
                            <div class="radio-inline col-md-2,5 ">
                                
                                <label for="titre"><input type="checkbox" name="document" id="titre" value="titre">  Titre de séjour</label>
                            </div>
                            <div class="radio-inline col-md-2">
                                
                                <label for="aucun"><input type="checkbox" name="document" id="aucun" value="aucun">  Aucun</label>
                            </div>
                            <div class="radio-inline col-md-4">
                                
                                <label for="autre"><input type="checkbox" name="document" id="autre" value="autre">  Autre :</label>
                                <input type="text" class="form-control" name="document" id="autre">
                            </div>
                        </div>
                    </div>

                    <div class="row col-4 arrivee-form-domiciliation">
                        <label for="domiciliation">Domiciliation :</label>
                        <input type="text" class="form-control" name="domiciliation" id="domiciliation">
                    </div>

                    <div class="row col-4 arrivee-form-nationalite">
                        <label for="nationalite">Nationalité :</label>
                        <input type="text" class="form-control" name="nationalite" id="nationalite">
                    </div>

                    <div class="row arrivee-form-numeroSS">
                        <div class="col-6">
                            <label for="numeroSS">Numéro de Sécurité Sociale :</label>
                            <input type="text" class="form-control" name="numeroSS" id="numeroSS">
                        </div>
                        <div class="col-6">
                            <label for="carte-vitale">Carte Vitale :</label>
                            <select class="form-control" name="carte-vitale" id="carte-vitale">
                                <option value="" selected></option>
                                <option value="true">Oui</option>
                                <option value="false">Non</option>
                            </select>
                        </div>
                    </div>

                    <div class="row arrivee-form-asile">
                        <section class="col-6">
                            <label for="asile">Procédure d'asile :</label>
                            <select class="form-control" [(ngModel)]="show" name="carte-vitale" id="carte-vitale">
                                <option selected value=""></option>
                                <option value="true">Oui</option>
                                <option value="false">Non</option>
                            </select>
                        </section>
                        
                        <section class="col-6" *ngIf="show === 'true'">
                            <label for="reguliere">Si oui, étapes réalisées</label>
                            <textarea class="form-control" name="asile" id="asile-etapes" cols="50" rows="5"></textarea>
                        </section>
                    </div>

                    <div *ngIf="router.url === '/fiche/administration/admission' || router.url === '/fiche/administration/sortie'"><br><hr></div>

                    <div class="row col arrivee-form-confirm" *ngIf="router.url === '/fiche/administration/admission' || router.url === '/fiche/administration/sortie'">
                        
                        <div class="col-6">
                            <label class="col" for="confirm">{{router.url === '/fiche/administration/admission' ? 'ADMISSION' : 'SORTIE'}} :</label>
                            <div class="col">
                                <div class="radio-inline">
                                    <label for="confirm-oui"><input type="radio" name="confirm" id="confirm-oui" value="true">  Oui</label>
                                </div>
                                <div class="radio-inline">
                                    <label for="confirm-non"><input type="radio" name="confirm" id="confirm-non" value="false">  Non</label>
                                </div>  
                            </div>
                        </div>
                        
                        <div class="col-6">
                           <div class="col">
                                <label for="confirm">Entretien par :</label>
                                <input type="text" class="form-control" name="confirm-who" id="confirm-who">
                           </div>
                           <div class="col">
                                <label for="confirm-date">A la date du :</label>
                                <input type="date" class="form-control" name="confirm-date" id="confirm-date">
                           </div>
                        </div>
                    </div>
                </form>

            </fieldset>
        </section>
    </div>
  `,
  styleUrls: ['../../../fiche.component.css']
})
export class FicheAdministrationQuestionnaireSituationComponent implements OnInit {
    
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
