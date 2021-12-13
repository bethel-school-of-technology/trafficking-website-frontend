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
  listofTestimonies;
  business: Organization
  testimony: Testimony;
  listofApprovedTestimonies;
  listofDeclinedTestimonies;
  listofDeletedTestimonies;
  constructor(private allorganizations: OrganizationsService, private tokenStorage: TokenStorageService, private authservice:AuthService) { }

  ngOnInit(): void {
    this.allorganizations.adminGetAll().subscribe(res => {
      if(res){
        this.listOfBusinesses = res.business;
      }else{
        console.log('failure')
      }
    });
    this.allorganizations.adminGetByApproved().subscribe(res => {
      if(res){
        this.listofApprovedTestimonies = res.testimonials;
      }else{
        console.log('failure')
      }
    });
    this.allorganizations.adminGetByDeclined().subscribe(res => {
      if(res){
        this.listofDeclinedTestimonies = res.testimonials;
      }else{
        console.log('failure')
      }
    });
    this.allorganizations.adminGetBydeleted().subscribe(res => {
      if(res){
        this.listofDeletedTestimonies - res.testimonials;
      }else{
        console.log('failure')
      }
    })
  }
  logout= () => {
    this.tokenStorage.signOut();
  }
  
  deleteOrganization = (BusinessId:number) => {
    this.allorganizations.deleteOrganization(BusinessId).subscribe(res=> {
      if(res){
        alert(res.message);
      };
    });
  };
  approveTestimony = (testimonyId: number) => {
    this.allorganizations.AdminApproval(testimonyId).subscribe(res => {
      if(res){
        alert(res.message);
      }else{
        console.log("error");
      };
    });
  };
  denyTestimony = (testimonyId: number) => {
    this.allorganizations.AdminRejection(testimonyId).subscribe(res => {
      if(res){
        alert(res.message);
      }else{
        console.log('Error.');
      };
    });
  };
  deleteTestimony = (testimonyId: number) => {
    this.allorganizations.AdminDeleteTestimony(testimonyId).subscribe(res => {
      if(res){
        alert(res.message)
      }else{
        console.log('error')
      }
    })
  }
  

}
