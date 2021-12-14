import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Organization } from 'Models/organization';
import { Testimony } from 'Models/testimony';
import { OrganizationsService } from 'src/app/Services/organizations.service';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent implements OnInit {

listofBusinesses;

zipcode: number
business: Organization;
inputZipCode

  constructor(private myOrganizationsService: OrganizationsService, private router: Router) { }
  ZipCode: Organization["ZipCode"]
  // happens right away
  ngOnInit(): void {
    
  
  }
  getbusinessesByZip = (zipcode: number) => {
    this.myOrganizationsService.getBusinessesByZip(zipcode).subscribe(res => {
      if(res){
        this.listofBusinesses = res.businesses;
        this.router.navigate(['organizations']);
      }else{
        console.log('big error here.')
      }
    });
  };

}
