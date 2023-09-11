import { TestBed } from '@angular/core/testing';

import { UtilDocumentService } from './util-document.service';

describe('UtilDocumentService', () => {
  let service: UtilDocumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilDocumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
