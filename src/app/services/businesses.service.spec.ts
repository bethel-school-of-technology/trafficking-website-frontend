import { TestBed } from '@angular/core/testing';

import { BusinessesService } from './businesses.service';

describe('BusinessesService', () => {
  let service: BusinessesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
