import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheProfilEtapeComponent } from './fiche-profil-etape.component';

describe('FicheProfilEtapeComponent', () => {
  let component: FicheProfilEtapeComponent;
  let fixture: ComponentFixture<FicheProfilEtapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheProfilEtapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheProfilEtapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
