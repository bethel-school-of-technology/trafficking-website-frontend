import { TestBed } from '@angular/core/testing';

import { StaticTestimonialService } from './static-testimonial.service';

describe('StaticTestimonialService', () => {
  let service: StaticTestimonialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticTestimonialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
