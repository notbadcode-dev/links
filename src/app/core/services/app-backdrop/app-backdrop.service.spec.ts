import { TestBed } from '@angular/core/testing';

import { AppBackdropService } from './app-backdrop.service';

describe('AppBackdropService', () => {
  let service: AppBackdropService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppBackdropService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
