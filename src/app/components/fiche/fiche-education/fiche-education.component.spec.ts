import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheEducationComponent } from './fiche-education.component';

describe('FicheEducationComponent', () => {
  let component: FicheEducationComponent;
  let fixture: ComponentFixture<FicheEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
