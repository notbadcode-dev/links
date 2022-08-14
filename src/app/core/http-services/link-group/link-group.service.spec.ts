import { TestBed } from '@angular/core/testing';

import { LinkGroupService } from './link-group.service';

describe('LinkGroupService', () => {
  let service: LinkGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
