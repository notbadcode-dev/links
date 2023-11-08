import { TestBed } from '@angular/core/testing';

import { UtilWindowService } from './util-window.service';

describe('UtilWindowService', () => {
  let service: UtilWindowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilWindowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
