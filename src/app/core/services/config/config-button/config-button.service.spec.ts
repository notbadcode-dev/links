import { TestBed } from '@angular/core/testing';

import { ConfigButtonService } from './config-button.service';

describe('ConfigButtonService', () => {
  let service: ConfigButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
