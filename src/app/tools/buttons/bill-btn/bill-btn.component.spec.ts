import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillBtnComponent } from './bill-btn.component';

describe('BillBtnComponent', () => {
  let component: BillBtnComponent;
  let fixture: ComponentFixture<BillBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
