import { Component, OnInit } from '@angular/core';
import { Organization } from 'Models/organization';
import { OrganizationsService } from 'src/app/Services/organizations.service';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent implements OnInit {

 listOfOrganizations: Organization[] = [];


  constructor(private myOrganizationsService: OrganizationsService) { }

  // happens right away
  ngOnInit(): void {
    // using the serive function that you made called getAllOrganizations and recieving a response
    this.myOrganizationsService.getAllOrganizations().subscribe(response => {
      console.log(response);
      this.listOfOrganizations = response;
    })
  }

}
