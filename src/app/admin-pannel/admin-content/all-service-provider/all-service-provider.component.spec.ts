import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllServiceProviderComponent } from './all-service-provider.component';

describe('AllServiceProviderComponent', () => {
  let component: AllServiceProviderComponent;
  let fixture: ComponentFixture<AllServiceProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllServiceProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllServiceProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
