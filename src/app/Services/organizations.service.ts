import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs';
// import { userModel } from 'Models/userModel';
import { Organization } from 'Models/organization';
import { loginModel } from 'Models/loginModel';
import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';
import { Testimony } from 'Models/testimony';
import { TokenStorageService } from './token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class OrganizationsService {
  backendURL: string = "http://localhost:3000/businesses";
  myOrganizationURL: string = "http://localhost:4200";
  testimonialURL: string = 'http://localhost:3000/testimonials';
   authtoken = this.tokenThing.getToken();
  

  constructor(private http: HttpClient, private tokenThing: TokenStorageService) { }
  
// Will list all organizations in db on the organizations page-READ
  getAllOrganizations(): Observable<Organization[]> {
    return this.http.get<Organization[]>(this.myOrganizationURL)
  };
  login = (login: loginModel): Observable<{token:string, message:string,organization: Organization}> => {
    return this.http.post<{token:string, message:string, organization: Organization }>(this.backendURL + '/login', login)
    
  };
  // Will create new Organiztion, will go into sign-up page-CREATE
  createOrganization = (newOrganization: Organization): Observable<any> => {
    return this.http.post<any>(this.backendURL + '/signup', newOrganization);
  };

  // Will edit/update Organizations, will go into login page-UPDATE
  updateOrganiztaion = (edittedInfo: Organization): Observable<Organization> => {
    return this.http.put<Organization>(this.myOrganizationURL, edittedInfo);
  };
  getTestimoniesWithCorrespondingBusiness = ():Observable<any> => {
    return this.http.get<any>(this.backendURL + '/organizations');
  };

  
  deleteOrganization = (BusinessId: number): Observable<any> => {
    return this.http.get<any>(`${this.myOrganizationURL}/${BusinessId}` + '/delete')
  };
  AdminApproval = (testimonyId: number):Observable<any> => {
    return this.http.get<any>(`${this.testimonialURL}/posts/${testimonyId}/approval`);
  };
  AdminRejection = (testimonyId:number):Observable<any> => {
    return this.http.get<any>(`${this.testimonialURL}/posts/${testimonyId}/decline`);

  };
  AdminDeleteTestimony = (testimonyId: number):Observable<any> => {
    return this.http.get<any>(`${this.testimonialURL}/posts/${testimonyId}/delete` )
  }
  getProfile = ():Observable<any> => {
    return this.http.get<any>(`${this.backendURL}/profile`);
  };
  createTestimony = (newTestimony: Testimony):Observable<any> => {
    return this.http.post<any>(`${this.testimonialURL}/posts`, newTestimony);
  };
  adminGetAll = ():Observable<any> => {
    return this.http.get<any>(`${this.backendURL}/admin`);
  }
  adminGetByApproved = ():Observable<any> => {
    return this.http.get<any>(`${this.testimonialURL}/posts/approved`);
  }
  adminGetByDeclined = ():Observable<any> => {
    return this.http.get<any>(`${this.testimonialURL}/posts/declined`);
  }
  adminGetBydeleted = ():Observable<any> => {
    return this.http.get<any>(`${this.testimonialURL}/posts/deleted`);
  }
  getBusinessesByZip = (ZipCode):Observable<any> => {
    return this.http.get<any>(`${this.backendURL}/getinvolved/${ZipCode}`)
  } 
  
};