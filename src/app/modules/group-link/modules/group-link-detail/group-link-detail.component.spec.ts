import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupLinkDetailComponent } from './group-link-detail.component';

describe('GroupLinkDetailComponent', () => {
  let component: GroupLinkDetailComponent;
  let fixture: ComponentFixture<GroupLinkDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupLinkDetailComponent]
    });
    fixture = TestBed.createComponent(GroupLinkDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
