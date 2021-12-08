import { Component, OnInit } from '@angular/core';
import { OrganizationsService } from 'src/app/Services/organizations.service';
import { Organization } from 'Models/organization';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  listoforganizations: Organization[] =[]
  constructor(private allorganizations: OrganizationsService) { }

  ngOnInit(): void {
    this.allorganizations.getAllOrganizations().subscribe(response =>{
      console.log(response);
      this.listoforganizations = response;
    })
  }


}
