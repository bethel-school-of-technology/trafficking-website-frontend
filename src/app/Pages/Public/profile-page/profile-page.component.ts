import { Component, OnInit } from '@angular/core';
import { Organization } from 'Models/organization';
import { AuthService } from 'src/app/Services/auth.service';
import { OrganizationsService } from 'src/app/Services/organizations.service';
import { TokenStorageService } from 'src/app/Services/token-storage.service';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
currentUser: Organization = new Organization();
  constructor(private tokenStorage: TokenStorageService, private orgService: OrganizationsService, private authservice: AuthService) { }
  
  profile;

  ngOnInit(): void {
    this.orgService.getProfile().subscribe((res) => {
      console.log(res);
      this.profile = res.user
    })
  }
  logout = () => {
    this.tokenStorage.signOut();
  }
  
}
