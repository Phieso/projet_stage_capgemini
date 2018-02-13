import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheNavBarComponent } from './fiche-nav-bar.component';

describe('FicheNavBarComponent', () => {
  let component: FicheNavBarComponent;
  let fixture: ComponentFixture<FicheNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
