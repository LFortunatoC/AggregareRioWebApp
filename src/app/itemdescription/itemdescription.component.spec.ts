import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemdescriptionComponent } from './itemdescription.component';

describe('ItemdescriptionComponent', () => {
  let component: ItemdescriptionComponent;
  let fixture: ComponentFixture<ItemdescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemdescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
