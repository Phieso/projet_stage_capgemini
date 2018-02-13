import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheCommunComponent } from './fiche-commun.component';

describe('FicheCommunComponent', () => {
  let component: FicheCommunComponent;
  let fixture: ComponentFixture<FicheCommunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheCommunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheCommunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
