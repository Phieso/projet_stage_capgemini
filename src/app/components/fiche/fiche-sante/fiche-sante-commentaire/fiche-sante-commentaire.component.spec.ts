import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheSanteCommentaireComponent } from './fiche-sante-commentaire.component';

describe('FicheSanteCommentaireComponent', () => {
  let component: FicheSanteCommentaireComponent;
  let fixture: ComponentFixture<FicheSanteCommentaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheSanteCommentaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheSanteCommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
