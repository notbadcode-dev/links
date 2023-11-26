import { TestBed } from '@angular/core/testing';

import { GroupLinkDataService } from './group-link-data.service';

describe('GroupLinkDataService', () => {
  let service: GroupLinkDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupLinkDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
