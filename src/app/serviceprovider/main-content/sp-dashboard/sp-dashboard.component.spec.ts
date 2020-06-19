import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpDashboardComponent } from './sp-dashboard.component';

describe('SpDashboardComponent', () => {
  let component: SpDashboardComponent;
  let fixture: ComponentFixture<SpDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
