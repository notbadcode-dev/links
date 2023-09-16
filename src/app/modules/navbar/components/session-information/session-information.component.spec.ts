import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionInformationComponent } from './session-information.component';

describe('SessionInformationComponent', () => {
  let component: SessionInformationComponent;
  let fixture: ComponentFixture<SessionInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SessionInformationComponent]
    });
    fixture = TestBed.createComponent(SessionInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
