import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheAdministrationSortieComponent } from './fiche-administration-sortie.component';

describe('FicheAdministrationSortieComponent', () => {
  let component: FicheAdministrationSortieComponent;
  let fixture: ComponentFixture<FicheAdministrationSortieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheAdministrationSortieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheAdministrationSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
