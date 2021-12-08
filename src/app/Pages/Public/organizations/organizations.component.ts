import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
<<<<<<< HEAD
import { Organization } from 'Models/organization';
import { OrganizationsService } from 'src/app/Services/organizations.service';
=======
>>>>>>> 7dc4eb485e22fb341c98aff760da0c53d9142eba
=======
import { Organization } from 'Models/organization';
import { Testimony } from 'Models/testimony';
import { OrganizationsService } from 'src/app/Services/organizations.service';
>>>>>>> 58f993632d272dc19730702c83d549b4ca0097c7

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent implements OnInit {

<<<<<<< HEAD
<<<<<<< HEAD
 listOfOrganizations: Organization[] = [];


  constructor(private myOrganizationsService: OrganizationsService) { }

  // happens right away
  ngOnInit(): void {
    // using the serive function that you made called getAllOrganizations and recieving a response
    this.myOrganizationsService.getAllOrganizations().subscribe(response => {
      console.log(response);
      this.listOfOrganizations = response;
    })
=======
  constructor() { }
=======
 listOfOrganizations: Organization[] = [];
 listOfTestimonies: Testimony[] = [];
>>>>>>> 58f993632d272dc19730702c83d549b4ca0097c7


  constructor(private myOrganizationsService: OrganizationsService) { }

  // happens right away
  ngOnInit(): void {
<<<<<<< HEAD
>>>>>>> 7dc4eb485e22fb341c98aff760da0c53d9142eba
=======
    // using the serive function that you made called getAllOrganizations and recieving a response
    this.myOrganizationsService.getAllOrganizations().subscribe(response => {
      console.log(response);
      this.listOfOrganizations = response;
    })
>>>>>>> 58f993632d272dc19730702c83d549b4ca0097c7
  }

}
