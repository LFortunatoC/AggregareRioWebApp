import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LangDropListComponent } from './lang-drop-list.component';

describe('LangDropListComponent', () => {
  let component: LangDropListComponent;
  let fixture: ComponentFixture<LangDropListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangDropListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangDropListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
