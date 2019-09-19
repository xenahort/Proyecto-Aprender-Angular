import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesListComponentComponent } from './services-list-component.component';

describe('ServicesListComponentComponent', () => {
  let component: ServicesListComponentComponent;
  let fixture: ComponentFixture<ServicesListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
