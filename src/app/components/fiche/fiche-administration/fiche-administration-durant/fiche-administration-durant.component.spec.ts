import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheAdministrationDurantComponent } from './fiche-administration-durant.component';

describe('FicheAdministrationDurantComponent', () => {
  let component: FicheAdministrationDurantComponent;
  let fixture: ComponentFixture<FicheAdministrationDurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheAdministrationDurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheAdministrationDurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
