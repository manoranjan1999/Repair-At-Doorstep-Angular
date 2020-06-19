import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpAddTechnicianComponent } from './sp-add-technician.component';

describe('SpAddTechnicianComponent', () => {
  let component: SpAddTechnicianComponent;
  let fixture: ComponentFixture<SpAddTechnicianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpAddTechnicianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpAddTechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
