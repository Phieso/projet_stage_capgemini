import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheSantePsychologiqueCommentaireComponent } from './fiche-sante-psychologique-commentaire.component';

describe('FicheSantePsychologiqueCommentaireComponent', () => {
  let component: FicheSantePsychologiqueCommentaireComponent;
  let fixture: ComponentFixture<FicheSantePsychologiqueCommentaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheSantePsychologiqueCommentaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheSantePsychologiqueCommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
