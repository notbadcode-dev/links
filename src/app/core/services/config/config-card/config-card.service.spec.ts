import { TestBed } from '@angular/core/testing';

import { ConfigCardService } from './config-card.service';

describe('ConfigCardService', () => {
  let service: ConfigCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
