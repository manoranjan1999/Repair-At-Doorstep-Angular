import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpQueryComponent } from './sp-query.component';

describe('SpQueryComponent', () => {
  let component: SpQueryComponent;
  let fixture: ComponentFixture<SpQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
