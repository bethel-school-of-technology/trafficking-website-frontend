import { Component, OnInit } from '@angular/core';
import { userModel } from 'Models/userModel';
import { OrganizationsService } from 'src/app/Services/organizations.service';
import { Router } from '@angular/router';

export type EditorType = 'profile';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  newOrganization: userModel[] = [];
  singleOrganization = this.newOrganization[0];

 

  constructor(private myOrganizationService: OrganizationsService, private router: Router) { }

  ngOnInit(): void {
  }
createNewOrganization() {
  this.myOrganizationService.createOrganization(this.newOrganization).subscribe(response => {
    console.log(response);
  });
}

}
