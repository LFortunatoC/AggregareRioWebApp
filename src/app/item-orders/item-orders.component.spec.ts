import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemOrdersComponent } from './item-orders.component';

describe('ItemOrdersComponent', () => {
  let component: ItemOrdersComponent;
  let fixture: ComponentFixture<ItemOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
