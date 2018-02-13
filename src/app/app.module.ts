import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './_guards/index';
import { JwtInterceptor } from './_helpers/index';
import { AuthenticationService, UserService, FicheService, ProfilService, EducationService, JuridiqueService, FoyerService } from './_services/index';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppNavBarComponent } from './components/app-nav-bar/app-nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { FicheComponent } from './components/fiche/fiche.component';
import { FicheNavBarComponent } from './components/fiche/fiche-nav-bar/fiche-nav-bar.component';
import { FicheCommunComponent } from './components/fiche/fiche-commun/fiche-commun.component';
import { FicheSanteComponent } from './components/fiche/fiche-sante/fiche-sante.component';
import { FicheEducationComponent } from './components/fiche/fiche-education/fiche-education.component';
import { FicheEducationCommentaireComponent } from './components/fiche/fiche-education/fiche-education-commentaire/fiche-education-commentaire.component';

import { SantePhysiqueComponent } from './components/fiche/fiche-sante/sante-physique/sante-physique.component';
import { SantePsychoComponent } from './components/fiche/fiche-sante/sante-psycho/sante-psycho.component';
import { FicheSanteCommentaireComponent } from './components/fiche/fiche-sante/fiche-sante-commentaire/fiche-sante-commentaire.component';

import { FicheJuridiqueComponent } from './components/fiche/fiche-juridique/fiche-juridique.component';
import { FicheJuridiqueCommentaireComponent } from './components/fiche/fiche-juridique/fiche-juridique-commentaire/fiche-juridique-commentaire.component';
import { FicheFoyerComponent } from './components/fiche/fiche-foyer/fiche-foyer.component';
import { FicheFoyerCommentaireComponent } from './components/fiche/fiche-foyer/fiche-foyer-commentaire/fiche-foyer-commentaire.component';

import { FicheAdministrationComponent } from './components/fiche/fiche-administration/fiche-administration.component';
import { FicheAdministrationAdmissionComponent } from './components/fiche/fiche-administration/fiche-administration-admission/fiche-administration-admission.component';
import { FicheAdministrationDurantComponent } from './components/fiche/fiche-administration/fiche-administration-durant/fiche-administration-durant.component';
import { FicheAdministrationSortieComponent } from './components/fiche/fiche-administration/fiche-administration-sortie/fiche-administration-sortie.component';
import { FicheAdministrationQuestionnaireComponent } from './components/fiche/fiche-administration/fiche-administration-questionnaire/fiche-administration-questionnaire.component';
import { FicheAdministrationQuestionnaireSituationComponent } from './components/fiche/fiche-administration/fiche-administration-questionnaire/fiche-administration-questionnaire-situation/fiche-administration-questionnaire-situation.component';
import { FicheAdministrationQuestionnaireDroitsComponent } from './components/fiche/fiche-administration/fiche-administration-questionnaire/fiche-administration-questionnaire-droits/fiche-administration-questionnaire-droits.component';
import { FicheAdministrationQuestionnaireSuiviComponent } from './components/fiche/fiche-administration/fiche-administration-questionnaire/fiche-administration-questionnaire-suivi/fiche-administration-questionnaire-suivi.component';

import { HomeComponent } from './components/home/home.component';

import { ProfileComponent } from './components/fiche/profile/profile.component';
import { FicheProfilContratComponent } from './components/fiche/profile/fiche-profil-contrat/fiche-profil-contrat.component';
import { FicheProfilEtapeComponent } from './components/fiche/profile/fiche-profil-etape/fiche-profil-etape.component';

import { SearchComponent } from './components/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


const appRoutes: Routes = [
  //routes need authentification for example :  { path: 'path', component: pathComponent, canActivate: [AuthGuard] },
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]  },
  {
    path: 'fiche',
    component: FicheComponent,
    canActivate: [AuthGuard] ,
    children: [
      //{path: '', redirectTo: 'profil'}, 
      {path: 'profil', component:ProfileComponent, canActivate: [AuthGuard]  },
      {
          path: 'administration',
          component: FicheAdministrationComponent,
          canActivate: [AuthGuard],
          children: [
            { path: 'admission', component: FicheAdministrationAdmissionComponent, canActivate: [AuthGuard]  },
            { path: 'durant', component: FicheAdministrationDurantComponent, canActivate: [AuthGuard]  },
            { path: 'sortie', component: FicheAdministrationSortieComponent, canActivate: [AuthGuard]  }
          ]
      },
      {
          path: 'sante',
          component: FicheSanteComponent,
          canActivate: [AuthGuard], 
          children: [
            {path: 'physique', component: SantePhysiqueComponent, canActivate: [AuthGuard] },
            {path: 'psy', component: SantePsychoComponent, canActivate: [AuthGuard] }
          ]
      },
      {path: 'education', component: FicheEducationComponent , canActivate: [AuthGuard] },
      {path: 'juridique', component: FicheJuridiqueComponent , canActivate: [AuthGuard] },
      {path: 'foyer', component: FicheFoyerComponent , canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavBarComponent,
    LoginComponent,
    FicheComponent,
    FicheNavBarComponent,
    FicheCommunComponent,
    FicheSanteComponent,
    FicheEducationComponent,
    FicheEducationCommentaireComponent,
    FicheJuridiqueComponent,
    FicheJuridiqueCommentaireComponent,
    FicheFoyerComponent,
    FicheFoyerCommentaireComponent,
    FicheAdministrationComponent,
    FicheAdministrationAdmissionComponent,
    FicheAdministrationDurantComponent,
    FicheAdministrationSortieComponent,
    FicheAdministrationQuestionnaireComponent,
    FicheAdministrationQuestionnaireSituationComponent,
    FicheAdministrationQuestionnaireDroitsComponent,
    FicheAdministrationQuestionnaireSuiviComponent,

    HomeComponent,
    SearchComponent,
    ProfileComponent,
    FicheProfilContratComponent,
    FicheProfilEtapeComponent,
    SantePhysiqueComponent,
    SantePsychoComponent,
    FicheSanteCommentaireComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,
    ProfilService,
    EducationService,
    JuridiqueService,
    FoyerService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor,
        multi: true
    },
    FicheService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
