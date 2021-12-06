import { TestBed } from '@angular/core/testing';

import { ZipCodesService } from './zip-codes.service';

describe('ZipCodesService', () => {
  let service: ZipCodesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZipCodesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
