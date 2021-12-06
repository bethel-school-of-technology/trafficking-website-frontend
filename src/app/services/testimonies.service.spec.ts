import { TestBed } from '@angular/core/testing';

import { TestimoniesService } from './testimonies.service';

describe('TestimoniesService', () => {
  let service: TestimoniesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestimoniesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
