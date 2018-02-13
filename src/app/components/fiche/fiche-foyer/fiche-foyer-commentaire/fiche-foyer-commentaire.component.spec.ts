import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheFoyerCommentaireComponent } from './fiche-foyer-commentaire.component';

describe('FicheFoyerCommentaireComponent', () => {
  let component: FicheFoyerCommentaireComponent;
  let fixture: ComponentFixture<FicheFoyerCommentaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheFoyerCommentaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheFoyerCommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
