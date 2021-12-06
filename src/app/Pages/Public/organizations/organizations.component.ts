import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Organization } from 'Models/organization';
import { OrganizationsService } from 'src/app/Services/organizations.service';
=======
>>>>>>> 7dc4eb485e22fb341c98aff760da0c53d9142eba

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent implements OnInit {

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

  ngOnInit(): void {
>>>>>>> 7dc4eb485e22fb341c98aff760da0c53d9142eba
  }

}
