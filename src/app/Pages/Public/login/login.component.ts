import { Component, OnInit } from '@angular/core';
import { loginModel } from 'Models/loginModel';
import { AuthService } from 'src/app/Services/auth.service';
import { OrganizationsService } from 'src/app/Services/organizations.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: loginModel = new loginModel(); 
  constructor(private orgService : OrganizationsService, private authservice: AuthService) { }

  ngOnInit(): void {
  }
  loginFunction = () => {
    this.authservice.login(this.login);
  }

}
