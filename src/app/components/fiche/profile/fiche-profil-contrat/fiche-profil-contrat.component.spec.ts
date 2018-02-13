import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheProfilContratComponent } from './fiche-profil-contrat.component';

describe('FicheProfilContratComponent', () => {
  let component: FicheProfilContratComponent;
  let fixture: ComponentFixture<FicheProfilContratComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheProfilContratComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheProfilContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
