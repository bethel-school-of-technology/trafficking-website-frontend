import { Injectable } from '@angular/core';
import { Testimony } from 'Models/testimony';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TestimonyService {
  testimonies: string ="http://localhost:3000/"

  constructor(private Http: HttpClient) { }

  //Get all business
  getAllTestimonies(): Observable<Testimony[]>{
  return this.Http.get<Testimony[]>(this.testimonies)
  }

  //pull one profile
  getOneBusiness(reqID: number): Observable<Testimony>{
    return this.Http.get<Testimony>(`${this.testimonies}/${reqID}`)
  }

  //create buisnes
  createTestimony(newBusiness: Testimony) : Observable<Testimony> {
    console.log(newBusiness)
    return this.Http.post<Testimony>(`${this.testimonies}`, newBusiness)
  }

  //delete business
  //deleteBusiness(reqId:number): Observable<any>{
    //return this.Http.delete<Testimony>(`${API_ENDPOINT}/testimonies/${reqId}`)
   // return this.Http.delete<Signup>(`${this.businesses}/${deleteBusiness}`)  }


  //Update info
  updateBusiness(editID:number, edittedInfo: Testimony): Observable<Testimony>{
    return this.Http.put<Testimony>(`${this.testimonies}/${editID}`, edittedInfo)
  }
}
