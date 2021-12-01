import { Component, OnInit } from '@angular/core';
import { StaticTestimonial } from 'src/app/models/static-testimonial';
import { StaticTestimonialService } from 'src/app/services/static-testimonial.service';
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  staticTestimonial: StaticTestimonial[];
  constructor(private StaticTestimonialService: StaticTestimonialService) { 
    
    this.staticTestimonial = StaticTestimonialService.staticTestimonial
  }

  ngOnInit(): void {
  }

}
