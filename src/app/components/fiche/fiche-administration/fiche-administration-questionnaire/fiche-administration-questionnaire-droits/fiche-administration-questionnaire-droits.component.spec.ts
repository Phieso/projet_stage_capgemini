import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheAdministrationQuestionnaireDroitsComponent } from './fiche-administration-questionnaire-droits.component';

describe('FicheAdministrationQuestionnaireDroitsComponent', () => {
  let component: FicheAdministrationQuestionnaireDroitsComponent;
  let fixture: ComponentFixture<FicheAdministrationQuestionnaireDroitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheAdministrationQuestionnaireDroitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheAdministrationQuestionnaireDroitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
