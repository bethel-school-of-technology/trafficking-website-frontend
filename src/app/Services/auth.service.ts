import { Injectable } from '@angular/core';
import { OrganizationsService } from './organizations.service';
import { loginModel } from 'Models/loginModel';
import { TokenStorageService } from './token-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private orgService: OrganizationsService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}
  userProfile;
  login = (login) => {
    this.orgService.login(login).subscribe((res) => {
      if (res.organization.Admin === true) {
        this.tokenStorage.saveToken(res.token);
        this.router.navigate(['admin']);
      } else {
       this.tokenStorage.saveToken(res.token);
       this.router.navigate(['profile']);
      };
    });
  };
  profile = () => {
    this.orgService.getProfile().subscribe((res) => {
      console.log(res);
    });
  };
}
