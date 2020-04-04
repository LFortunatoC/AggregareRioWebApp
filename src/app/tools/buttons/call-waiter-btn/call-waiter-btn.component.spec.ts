import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallWaiterBtnComponent } from './call-waiter-btn.component';

describe('CallWaiterBtnComponent', () => {
  let component: CallWaiterBtnComponent;
  let fixture: ComponentFixture<CallWaiterBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallWaiterBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallWaiterBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
