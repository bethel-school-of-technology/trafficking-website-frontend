import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { userModel } from 'Models/userModel';
import { OrganizationsService } from 'src/app/Services/organizations.service';
import { Router } from '@angular/router';

export type EditorType = 'profile';
=======
import { BusinessesService } from 'src/app/services/businesses.service';
import { Signup } from 'src/app/models/signup';

import { Router } from '@angular/router';
>>>>>>> 7dc4eb485e22fb341c98aff760da0c53d9142eba

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

<<<<<<< HEAD
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

=======
  newBusiness: Signup = new Signup() ;
  
  constructor(private BusinessesService:BusinessesService, private router:Router) { }



  ngOnInit(): void {
  }

  newbusiness(){
    this.BusinessesService.createBusiness(this.newBusiness).subscribe(response=>{
      //console.log(response);
    })
  }
>>>>>>> 7dc4eb485e22fb341c98aff760da0c53d9142eba
}
