import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProviderServiceComponent } from './service-provider-service.component';

describe('ServiceProviderServiceComponent', () => {
  let component: ServiceProviderServiceComponent;
  let fixture: ComponentFixture<ServiceProviderServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceProviderServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceProviderServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
