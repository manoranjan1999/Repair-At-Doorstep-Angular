import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpTechniciansComponent } from './sp-technicians.component';

describe('SpTechniciansComponent', () => {
  let component: SpTechniciansComponent;
  let fixture: ComponentFixture<SpTechniciansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpTechniciansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpTechniciansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
