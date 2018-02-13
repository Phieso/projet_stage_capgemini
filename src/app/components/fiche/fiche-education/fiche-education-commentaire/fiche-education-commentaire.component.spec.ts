import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheEducationCommentaireComponent } from './fiche-education-commentaire.component';

describe('FicheEducationCommentaireComponent', () => {
  let component: FicheEducationCommentaireComponent;
  let fixture: ComponentFixture<FicheEducationCommentaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheEducationCommentaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheEducationCommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
