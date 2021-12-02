import { Component, OnInit } from '@angular/core';
import { BusinessesService } from 'src/app/services/businesses.service';
import { Signup } from 'src/app/models/signup';

import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  newBusiness: Signup = new Signup() ;
  
  constructor(private BusinessesService:BusinessesService, private router:Router) { }



  ngOnInit(): void {
  }

  newbusiness(){
    this.BusinessesService.createBusiness(this.newBusiness).subscribe(response=>{
      //console.log(response);
    })
  }
}
