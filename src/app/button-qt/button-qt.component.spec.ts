import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonQtComponent } from './button-qt.component';

describe('ButtonQtComponent', () => {
  let component: ButtonQtComponent;
  let fixture: ComponentFixture<ButtonQtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonQtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonQtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
