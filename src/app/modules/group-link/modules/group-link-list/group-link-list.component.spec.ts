import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupLinkListComponent } from './group-link-list.component';

describe('GroupLinkListComponent', () => {
  let component: GroupLinkListComponent;
  let fixture: ComponentFixture<GroupLinkListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupLinkListComponent]
    });
    fixture = TestBed.createComponent(GroupLinkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
