import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
<<<<<<< HEAD
import { userModel } from 'Models/userModel';
=======
import { Organization } from 'Models/organization';
>>>>>>> 58f993632d272dc19730702c83d549b4ca0097c7
import { OrganizationsService } from 'src/app/Services/organizations.service';
import { Router } from '@angular/router';

export type EditorType = 'profile';
<<<<<<< HEAD
=======
import { BusinessesService } from 'src/app/services/businesses.service';
import { Signup } from 'src/app/models/signup';

import { Router } from '@angular/router';
>>>>>>> 7dc4eb485e22fb341c98aff760da0c53d9142eba
=======
>>>>>>> 58f993632d272dc19730702c83d549b4ca0097c7

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

<<<<<<< HEAD
<<<<<<< HEAD
  newOrganization: userModel[] = [];
  singleOrganization = this.newOrganization[0];
=======
  newOrganization: Organization = new Organization();
>>>>>>> 58f993632d272dc19730702c83d549b4ca0097c7

 

  constructor(private myOrganizationService: OrganizationsService, private router: Router) { }
<<<<<<< HEAD

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


=======
>>>>>>> 58f993632d272dc19730702c83d549b4ca0097c7

  ngOnInit(): void {
  }
createNewOrganization = () => {
  this.myOrganizationService.createOrganization(this.newOrganization).subscribe(response => {
    if(response){
      this.router.navigateByUrl('/login');
    }else{
      console.log('Failed to create business.');
    };
    
  });
}

  newbusiness(){
    this.BusinessesService.createBusiness(this.newBusiness).subscribe(response=>{
      //console.log(response);
    })
  }
>>>>>>> 7dc4eb485e22fb341c98aff760da0c53d9142eba
}
