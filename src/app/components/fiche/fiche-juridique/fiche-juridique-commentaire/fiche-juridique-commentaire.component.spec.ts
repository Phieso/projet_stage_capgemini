import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheJuridiqueCommentaireComponent } from './fiche-juridique-commentaire.component';

describe('FicheJuridiqueCommentaireComponent', () => {
  let component: FicheJuridiqueCommentaireComponent;
  let fixture: ComponentFixture<FicheJuridiqueCommentaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheJuridiqueCommentaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheJuridiqueCommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
