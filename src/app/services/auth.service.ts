import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{HttpClient} from '@angular/common/http'
import{environment} from '../../environments/environment' // Résupérer le const ApiUrl



@Injectable({
  providedIn: 'root'
})
export class AuthService {
private loginPath =  environment.apiUrl + '/Token'
private registerPath =  environment.apiUrl + '/Users'

//Constructeur avec instatiation d'in private var Http
  constructor(private http:HttpClient) {}

   login(data): Observable<any>{
    return this.http.post(this.loginPath, data)  
   }

   register(data): Observable<any>{
    return this.http.post(this.registerPath, data)
   }

   saveToken(token){
     localStorage.setItem('token',token)
   }

   getToken(){
     return localStorage.getItem('token')
   }
   
   isAuthenticated(){
     if(this.getToken()){ 
       return true
     }
     return false;
   }
}
