import { TestBed } from '@angular/core/testing';

import { GroupLinkService } from './group-link.service';

describe('GroupLinkService', () => {
  let service: GroupLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
