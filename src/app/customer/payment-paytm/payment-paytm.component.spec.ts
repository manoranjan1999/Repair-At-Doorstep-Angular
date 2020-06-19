import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentPaytmComponent } from './payment-paytm.component';

describe('PaymentPaytmComponent', () => {
  let component: PaymentPaytmComponent;
  let fixture: ComponentFixture<PaymentPaytmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentPaytmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentPaytmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
