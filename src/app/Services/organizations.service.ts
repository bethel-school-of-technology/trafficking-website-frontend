import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs';
import { userModel } from 'Models/userModel';
import { Organization } from 'Models/organization';
<<<<<<< HEAD
=======
import { loginModel } from 'Models/loginModel';
import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';
import { Testimony } from 'Models/testimony';

>>>>>>> 58f993632d272dc19730702c83d549b4ca0097c7

@Injectable({
  providedIn: 'root'
})
export class OrganizationsService {
<<<<<<< HEAD

  myOrganizationURL: string = "http://localhost:4200"

=======
  backendURL: string = "http://localhost:3000/businesses"
  myOrganizationURL: string = "http://localhost:4200"

  

>>>>>>> 58f993632d272dc19730702c83d549b4ca0097c7
  constructor(private http: HttpClient) { }

// Will list all organizations in db on the organizations page-READ
  getAllOrganizations(): Observable<Organization[]> {
    return this.http.get<Organization[]>(this.myOrganizationURL)
  }
<<<<<<< HEAD

  // Will create new Organiztion, will go into sign-up page-CREATE
  createOrganization(newOrganization: userModel[]): Observable<any> {
    return this.http.post<any>(this.myOrganizationURL, newOrganization);
  }

  // Will edit/update Organizations, will go into login page-UPDATE
  updateOrganiztion(edittedInfo: Organization): Observable<Organization>{
    return this.http.put<Organization>(this.myOrganizationURL, edittedInfo);
  }
=======
  login(login: loginModel): Observable<{token:string, message:string,organization: Organization }>{
    return this.http.post<{token:string, message:string,organization: Organization }>(this.backendURL + '/login', login)
  }

  // Will create new Organiztion, will go into sign-up page-CREATE
  createOrganization(newOrganization: Organization): Observable<any> {
    return this.http.post<any>(this.backendURL + '/signup', newOrganization);
  }

  // Will edit/update Organizations, will go into login page-UPDATE
  updateOrganiztaion(edittedInfo: Organization): Observable<Organization>{
    return this.http.put<Organization>(this.myOrganizationURL, edittedInfo);
  }
  getTestimoniesWithCorrespondingBusiness():Observable<any>{
    return this.http.get<any>(this.backendURL + '/organizations');
  }
>>>>>>> 58f993632d272dc19730702c83d549b4ca0097c7

  // Will delet Organization completely, will go into login page-DELETE
  deleteOrganization(): Observable<any>{
    return this.http.delete<any>('${this.myOrganizationURL}/${deleteID}')
  }
<<<<<<< HEAD
=======

    // Will delet Organization completely, will go into login page-DELETE
   // deleteOrganizatiosn(): Observable<any>{
    //  return this.http.delete<{Organization[], Testimony[]}>('${this.myOrganizationURL}/${deleteID}')
  //  }
>>>>>>> 58f993632d272dc19730702c83d549b4ca0097c7
}