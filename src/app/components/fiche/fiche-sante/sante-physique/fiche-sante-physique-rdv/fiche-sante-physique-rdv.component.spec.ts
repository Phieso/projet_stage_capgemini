import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheSantePhysiqueRdvComponent } from './fiche-sante-physique-rdv.component';

describe('FicheSantePhysiqueRdvComponent', () => {
  let component: FicheSantePhysiqueRdvComponent;
  let fixture: ComponentFixture<FicheSantePhysiqueRdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheSantePhysiqueRdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheSantePhysiqueRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
