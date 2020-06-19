import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingRequestComponent } from './incoming-request.component';

describe('IncomingRequestComponent', () => {
  let component: IncomingRequestComponent;
  let fixture: ComponentFixture<IncomingRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomingRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
