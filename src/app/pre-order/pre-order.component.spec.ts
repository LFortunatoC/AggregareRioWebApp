import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreOrderComponent } from './pre-order.component';

describe('PreOrderComponent', () => {
  let component: PreOrderComponent;
  let fixture: ComponentFixture<PreOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
