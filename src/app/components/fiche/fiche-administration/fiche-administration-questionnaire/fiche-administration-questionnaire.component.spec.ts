import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheAdministrationQuestionnaireComponent } from './fiche-administration-questionnaire.component';

describe('FicheAdministrationQuestionnaireComponent', () => {
  let component: FicheAdministrationQuestionnaireComponent;
  let fixture: ComponentFixture<FicheAdministrationQuestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheAdministrationQuestionnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheAdministrationQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
