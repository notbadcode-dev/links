import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupLinkDetailSimpleComponent } from './group-link-detail-simple.component';

describe('GroupLinkDetailSimpleComponent', () => {
  let component: GroupLinkDetailSimpleComponent;
  let fixture: ComponentFixture<GroupLinkDetailSimpleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupLinkDetailSimpleComponent]
    });
    fixture = TestBed.createComponent(GroupLinkDetailSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
