import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllServiceRequestComponent } from './all-service-request.component';

describe('AllServiceRequestComponent', () => {
  let component: AllServiceRequestComponent;
  let fixture: ComponentFixture<AllServiceRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllServiceRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllServiceRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
