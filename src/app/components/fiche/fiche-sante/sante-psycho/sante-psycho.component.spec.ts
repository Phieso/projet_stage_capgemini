import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SantePsychoComponent } from './sante-psycho.component';

describe('SantePsychoComponent', () => {
  let component: SantePsychoComponent;
  let fixture: ComponentFixture<SantePsychoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SantePsychoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SantePsychoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
