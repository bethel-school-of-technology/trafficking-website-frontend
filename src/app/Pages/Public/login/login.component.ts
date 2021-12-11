import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginModel } from 'Models/loginModel';
import { AuthService } from 'src/app/Services/auth.service';
import { OrganizationsService } from 'src/app/Services/organizations.service';
import { ProfilePageComponent } from '../profile-page/profile-page.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: loginModel = new loginModel(); 
  constructor(private orgService : OrganizationsService, private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  // loginPromise = () => {
  //   return new Promise((resolve, reject) => {
  //     this.authservice.login(this.login);

  

  //   })
  // }

  loginFunction = () => {
    this.authservice.login(this.login);
    // this.router.navigate(['profile']);

  };

}
