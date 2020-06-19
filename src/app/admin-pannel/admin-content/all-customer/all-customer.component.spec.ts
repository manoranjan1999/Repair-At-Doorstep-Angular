import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCustomerComponent } from './all-customer.component';

describe('AllCustomerComponent', () => {
  let component: AllCustomerComponent;
  let fixture: ComponentFixture<AllCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
