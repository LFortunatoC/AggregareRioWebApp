import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfobartitleComponent } from './infobartitle.component';

describe('InfobartitleComponent', () => {
  let component: InfobartitleComponent;
  let fixture: ComponentFixture<InfobartitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfobartitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfobartitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
