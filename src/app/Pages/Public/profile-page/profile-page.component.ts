import { Component, OnInit } from '@angular/core';
import { Organization } from 'Models/organization';
import { Testimony } from 'Models/testimony';
import { AuthService } from 'src/app/Services/auth.service';
import { OrganizationsService } from 'src/app/Services/organizations.service';
import { TokenStorageService } from 'src/app/Services/token-storage.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
currentUser: Organization = new Organization();
newTestimony: Testimony = new Testimony();

  constructor(private tokenStorage: TokenStorageService, private orgService: OrganizationsService, private authservice: AuthService) { }
  listoftestimonies
  profile;

  ngOnInit(): void {
    this.orgService.getProfile().subscribe((res) => {
      console.log(res);
      this.profile = res.user
      this.listoftestimonies = res.user.Testimonials;
    })
  }
  logout = () => {
    this.tokenStorage.signOut();
  }
  createTestimony = () => {
    this.orgService.createTestimony(this.newTestimony).subscribe(res => {
      console.log(res.message);
    })
  }
  
}
