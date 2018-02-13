import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheAdministrationComponent } from './fiche-administration.component';

describe('FicheAdministrationComponent', () => {
  let component: FicheAdministrationComponent;
  let fixture: ComponentFixture<FicheAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
