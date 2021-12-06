import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD

=======
import { StaticTestimonial } from 'src/app/models/static-testimonial';
import { StaticTestimonialService } from 'src/app/services/static-testimonial.service';
>>>>>>> 7dc4eb485e22fb341c98aff760da0c53d9142eba
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
<<<<<<< HEAD

  constructor() { }
=======
  staticTestimonial: StaticTestimonial[];
  constructor(private StaticTestimonialService: StaticTestimonialService) { 
    
    this.staticTestimonial = StaticTestimonialService.staticTestimonial
  }
>>>>>>> 7dc4eb485e22fb341c98aff760da0c53d9142eba

  ngOnInit(): void {
  }

}
