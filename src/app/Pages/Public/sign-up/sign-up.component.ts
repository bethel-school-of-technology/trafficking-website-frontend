import { Component, OnInit } from '@angular/core';
import { Organization } from 'Models/organization';
import { OrganizationsService } from 'src/app/Services/organizations.service';
import { Router } from '@angular/router';

export type EditorType = 'profile';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  newOrganization: Organization = new Organization();

 

  constructor(private myOrganizationService: OrganizationsService, private router: Router) { }

  ngOnInit(): void {
  }
createNewOrganization = () => {
  this.myOrganizationService.createOrganization(this.newOrganization).subscribe(response => {
    
  });
}

}
