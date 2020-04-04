import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartBtnComponent } from './start-btn.component';

describe('StartBtnComponent', () => {
  let component: StartBtnComponent;
  let fixture: ComponentFixture<StartBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
