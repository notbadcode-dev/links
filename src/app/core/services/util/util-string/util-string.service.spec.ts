import { TestBed } from '@angular/core/testing';

import { UtilStringService } from './util-string.service';

describe('UtilStringService', () => {
  let service: UtilStringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilStringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
