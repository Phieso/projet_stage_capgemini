import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SantePhysiqueComponent } from './sante-physique.component';

describe('SantePhysiqueComponent', () => {
  let component: SantePhysiqueComponent;
  let fixture: ComponentFixture<SantePhysiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SantePhysiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SantePhysiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
