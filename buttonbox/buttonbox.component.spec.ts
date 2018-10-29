import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonboxComponent } from './buttonbox.component';

describe('ButtonboxComponent', () => {
  let component: ButtonboxComponent;
  let fixture: ComponentFixture<ButtonboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
