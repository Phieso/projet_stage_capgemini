import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheFoyerComponent } from './fiche-foyer.component';

describe('FicheFoyerComponent', () => {
  let component: FicheFoyerComponent;
  let fixture: ComponentFixture<FicheFoyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheFoyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheFoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
