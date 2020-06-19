import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProvideSignupComponent } from './service-provide-signup.component';

describe('ServiceProvideSignupComponent', () => {
  let component: ServiceProvideSignupComponent;
  let fixture: ComponentFixture<ServiceProvideSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceProvideSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceProvideSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
