import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(auththing: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  const token = localStorage.getItem('auth-token');
  if(token) {
    console.log(token);
    const cloned = request.clone({
      headers: request.headers.set("Authorization", 
      "Bearer " + token)
    });
    console.log(cloned);
    return next.handle(cloned);
  }
  else{
    return next.handle(request);
  }
  }
  
}
