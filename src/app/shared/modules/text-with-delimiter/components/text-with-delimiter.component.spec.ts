import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextWithDelimiterComponent } from './text-with-delimiter.component';

describe('TextWithDelimiterComponent', () => {
  let component: TextWithDelimiterComponent;
  let fixture: ComponentFixture<TextWithDelimiterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextWithDelimiterComponent]
    });
    fixture = TestBed.createComponent(TextWithDelimiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
