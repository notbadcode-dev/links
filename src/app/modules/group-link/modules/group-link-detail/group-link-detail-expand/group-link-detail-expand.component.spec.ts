import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupLinkDetailExpandComponent } from './group-link-detail-expand.component';

describe('GroupLinkDetailExpandComponent', () => {
  let component: GroupLinkDetailExpandComponent;
  let fixture: ComponentFixture<GroupLinkDetailExpandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupLinkDetailExpandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroupLinkDetailExpandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
