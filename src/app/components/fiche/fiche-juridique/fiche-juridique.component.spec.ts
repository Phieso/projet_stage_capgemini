import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheJuridiqueComponent } from './fiche-juridique.component';

describe('FicheJuridiqueComponent', () => {
  let component: FicheJuridiqueComponent;
  let fixture: ComponentFixture<FicheJuridiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheJuridiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheJuridiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
