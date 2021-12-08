import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
<<<<<<< HEAD

=======
import { StaticTestimonial } from 'src/app/models/static-testimonial';
import { StaticTestimonialService } from 'src/app/services/static-testimonial.service';
>>>>>>> 7dc4eb485e22fb341c98aff760da0c53d9142eba
=======
import { Testimony } from 'Models/testimony';
import { any } from 'sequelize/types/lib/operators';
import { OrganizationsService } from 'src/app/Services/organizations.service';
import { Organization } from 'Models/organization';
>>>>>>> 58f993632d272dc19730702c83d549b4ca0097c7
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent implements OnInit {
<<<<<<< HEAD
<<<<<<< HEAD

  constructor() { }
=======
  staticTestimonial: StaticTestimonial[];
  constructor(private StaticTestimonialService: StaticTestimonialService) { 
    
    this.staticTestimonial = StaticTestimonialService.staticTestimonial
  }
>>>>>>> 7dc4eb485e22fb341c98aff760da0c53d9142eba
=======
  listOfBusinesses;
  constructor(private Orgservice: OrganizationsService) {}
>>>>>>> 58f993632d272dc19730702c83d549b4ca0097c7

  ngOnInit(): void {
    this.Orgservice.getTestimoniesWithCorrespondingBusiness().subscribe(
      (res) => {
        console.log(res);
        this.listOfBusinesses = res.business;
      }
    );
  }
}
