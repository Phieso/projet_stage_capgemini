import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheAdministrationQuestionnaireSuiviComponent } from './fiche-administration-questionnaire-suivi.component';

describe('FicheAdministrationQuestionnaireSuiviComponent', () => {
  let component: FicheAdministrationQuestionnaireSuiviComponent;
  let fixture: ComponentFixture<FicheAdministrationQuestionnaireSuiviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheAdministrationQuestionnaireSuiviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheAdministrationQuestionnaireSuiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
