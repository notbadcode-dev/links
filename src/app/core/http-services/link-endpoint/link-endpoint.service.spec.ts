import { TestBed } from '@angular/core/testing';

import { LinkEndpointService } from './link-endpoint.service';

describe('LinkEndpointService', () => {
    let service: LinkEndpointService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(LinkEndpointService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
