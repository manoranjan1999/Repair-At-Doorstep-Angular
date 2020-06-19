import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProviderRequestComponent } from './service-provider-request.component';

describe('ServiceProviderRequestComponent', () => {
  let component: ServiceProviderRequestComponent;
  let fixture: ComponentFixture<ServiceProviderRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceProviderRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceProviderRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
