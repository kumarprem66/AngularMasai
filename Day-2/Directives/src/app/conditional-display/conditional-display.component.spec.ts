import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalDisplayComponent } from './conditional-display.component';

describe('ConditionalDisplayComponent', () => {
  let component: ConditionalDisplayComponent;
  let fixture: ComponentFixture<ConditionalDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConditionalDisplayComponent]
    });
    fixture = TestBed.createComponent(ConditionalDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
