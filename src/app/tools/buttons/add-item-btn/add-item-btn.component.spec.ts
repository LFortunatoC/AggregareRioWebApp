import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemBtnComponent } from './add-item-btn.component';

describe('AddItemBtnComponent', () => {
  let component: AddItemBtnComponent;
  let fixture: ComponentFixture<AddItemBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddItemBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
