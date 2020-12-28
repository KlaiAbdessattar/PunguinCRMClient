import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{HttpClient} from '@angular/common/http'
import{environment} from '../../environments/environment' // Résupérer le const ApiUrl
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private loginPath =  environment.apiUrl + '/Token'
private registerPath =  environment.apiUrl + '/Users'

//Constructeur avec instatiation d'in private var Http
  constructor(private http:HttpClient, private router: Router) {}

   login(data): Observable<any>{
    return this.http.post(this.loginPath, data)  
   }

   register(data): Observable<any>{
    return this.http.post(this.registerPath, data)
   }

   saveToken(token){
     localStorage.setItem('jwt',token)
     
   }

   getToken(){
     return JSON.parse(localStorage.getItem('jwt'))
   }
   
  //  isAuthenticated(){
  //    if(this.getToken()){ 
  //      return true
  //    }
  //    return false;
  //  }
  isAuthenticated() {
    const token = localStorage.getItem("jwt");

   // if (token && !this.jwtHelper.isTokenExpired(token)
   if(token){
     // console.log(this.jwtHelper.decodeToken(token));
      return true;
    }
    this.router.navigate(["loginn"]);
    return false;
  }
}
