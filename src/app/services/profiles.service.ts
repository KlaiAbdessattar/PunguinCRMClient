import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { profil } from '../models/Profil';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
private profilesPath = environment.apiUrl+'/Profil';
  constructor(private http:HttpClient, private authService : AuthService) { }

  create(data):Observable<profil>{
    // let headers = new HttpHeaders();
    // headers = headers.set('Authorization',`Bearer ${this.authService.getToken()}`);
    return this.http.post<profil>(this.profilesPath,data)
  }
}

