import { TestBed } from '@angular/core/testing';

import { GroupLinkEndpointService } from './group-link-endpoint.service';

describe('GroupLinkEndpointService', () => {
  let service: GroupLinkEndpointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupLinkEndpointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
