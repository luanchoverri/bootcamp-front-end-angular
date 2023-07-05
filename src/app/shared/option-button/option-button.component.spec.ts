import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionButtonComponent } from './option-button.component';

describe('OptionButtonComponent', () => {
  let component: OptionButtonComponent;
  let fixture: ComponentFixture<OptionButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OptionButtonComponent]
    });
    fixture = TestBed.createComponent(OptionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
