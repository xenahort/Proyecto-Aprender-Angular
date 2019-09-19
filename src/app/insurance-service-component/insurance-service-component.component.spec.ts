import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceServiceComponentComponent } from './insurance-service-component.component';

describe('InsuranceServiceComponentComponent', () => {
  let component: InsuranceServiceComponentComponent;
  let fixture: ComponentFixture<InsuranceServiceComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceServiceComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceServiceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
