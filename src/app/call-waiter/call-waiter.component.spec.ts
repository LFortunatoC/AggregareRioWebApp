import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallWaiterComponent } from './call-waiter.component';

describe('CallWaiterComponent', () => {
  let component: CallWaiterComponent;
  let fixture: ComponentFixture<CallWaiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallWaiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallWaiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
