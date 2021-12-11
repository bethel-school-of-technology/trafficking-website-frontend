import { Component, OnInit } from '@angular/core';
import { OrganizationsService } from 'src/app/Services/organizations.service';
import { Organization } from 'Models/organization';
import { TokenStorageService } from 'src/app/Services/token-storage.service';
import { AuthService } from 'src/app/Services/auth.service';
import { Testimony } from 'Models/testimony';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  listoforganizations: Organization[] =[]
  listoftestimonies: Testimony[] =[]
  listOfBusinesses;
  constructor(private allorganizations: OrganizationsService, private tokenStorage: TokenStorageService, private authservice:AuthService) { }

  ngOnInit(): void {
    this.allorganizations.getAllOrganizations().subscribe(response =>{
      console.log(response);
      this.listoforganizations = response;
    })
  }
  logout= () => {
    this.tokenStorage.signOut();
  }
  
  deleteOrganization = () => {
    this.allorganizations.deleteOrganization().subscribe(res=> {
      console.log("success" + res);
    });
  };

  getTestimoniesWithCorrespondingBusiness = () =>{
    this.allorganizations.getTestimoniesWithCorrespondingBusiness().subscribe(res =>{
      console.log("success" + res);
      this.listOfBusinesses = res.business;
    })
  }

}
