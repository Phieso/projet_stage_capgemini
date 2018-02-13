import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheAdministrationQuestionnaireSituationComponent } from './fiche-administration-questionnaire-situation.component';

describe('FicheAdministrationQuestionnaireSituationComponent', () => {
  let component: FicheAdministrationQuestionnaireSituationComponent;
  let fixture: ComponentFixture<FicheAdministrationQuestionnaireSituationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheAdministrationQuestionnaireSituationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheAdministrationQuestionnaireSituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
