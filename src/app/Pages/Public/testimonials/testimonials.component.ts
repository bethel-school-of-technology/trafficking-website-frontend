import { Component, OnInit } from '@angular/core';
import { Testimony } from 'Models/testimony';
import { any } from 'sequelize/types/lib/operators';
import { OrganizationsService } from 'src/app/Services/organizations.service';
import { Organization } from 'Models/organization';
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent implements OnInit {
  listOfBusinesses;
  constructor(private Orgservice: OrganizationsService) {}

  ngOnInit(): void {
    this.Orgservice.getTestimoniesWithCorrespondingBusiness().subscribe(
      (res) => {
        console.log(res);
        this.listOfBusinesses = res.business;
      }
    );
  }
}
