import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullPictureComponent } from './full-picture.component';

describe('FullPictureComponent', () => {
  let component: FullPictureComponent;
  let fixture: ComponentFixture<FullPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
