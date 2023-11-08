import { TestBed } from '@angular/core/testing';

import { ConfigInputService } from './config-input.service';

describe('ConfigInputService', () => {
  let service: ConfigInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
