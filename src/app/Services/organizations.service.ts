import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs';
import { userModel } from 'Models/userModel';
import { Organization } from 'Models/organization';
import { loginModel } from 'Models/loginModel';
import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';


@Injectable({
  providedIn: 'root'
})
export class OrganizationsService {
  backendURL: string = "http://localhost:3000/businesses"
  myOrganizationURL: string = "http://localhost:4200"

  constructor(private http: HttpClient) { }

// Will list all organizations in db on the organizations page-READ
  getAllOrganizations(): Observable<Organization[]> {
    return this.http.get<Organization[]>(this.myOrganizationURL)
  }
  login(login: loginModel): Observable<{token:string, message:string,organization: Organization }>{
    return this.http.post<{token:string, message:string,organization: Organization }>(this.backendURL + '/login', login)
  }

  // Will create new Organiztion, will go into sign-up page-CREATE
  createOrganization(newOrganization: Organization): Observable<any> {
    return this.http.post<any>(this.backendURL + '/signup', newOrganization);
  }

  // Will edit/update Organizations, will go into login page-UPDATE
  updateOrganiztion(edittedInfo: Organization): Observable<Organization>{
    return this.http.put<Organization>(this.myOrganizationURL, edittedInfo);
  }

  // Will delet Organization completely, will go into login page-DELETE
  deleteOrganization(): Observable<any>{
    return this.http.delete<any>('${this.myOrganizationURL}/${deleteID}')
  }

    // Will delet Organization completely, will go into login page-DELETE
   // deleteOrganizatiosn(): Observable<any>{
    //  return this.http.delete<{Organization[], Testimony[]}>('${this.myOrganizationURL}/${deleteID}')
  //  }
}