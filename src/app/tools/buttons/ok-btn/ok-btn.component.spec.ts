import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OkBtnComponent } from './ok-btn.component';

describe('OkBtnComponent', () => {
  let component: OkBtnComponent;
  let fixture: ComponentFixture<OkBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OkBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OkBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
