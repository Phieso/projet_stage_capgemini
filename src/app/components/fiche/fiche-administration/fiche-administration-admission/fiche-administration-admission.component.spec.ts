import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheAdministrationAdmissionComponent } from './fiche-administration-admission.component';

describe('FicheAdministrationAdmissionComponent', () => {
  let component: FicheAdministrationAdmissionComponent;
  let fixture: ComponentFixture<FicheAdministrationAdmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheAdministrationAdmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheAdministrationAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
