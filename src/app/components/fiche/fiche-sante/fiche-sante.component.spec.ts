import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheSanteComponent } from './fiche-sante.component';

describe('FicheSanteComponent', () => {
  let component: FicheSanteComponent;
  let fixture: ComponentFixture<FicheSanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheSanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheSanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
