import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(public authService: AuthService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     // add authorization header with jwt token if available
     //let currentUser = this.authService.;
    
    
     req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${JSON.parse(window.localStorage.getItem("token"))}`
      }
    });
    return next.handle(req);

    // request = request.clone({
    //  headers: request.headers.set(
    //     'Authorization' , `Bearer`+ localStorage.getItem('token')
    //   )
    // });
    // return next.handle(request);
  }
 
}




