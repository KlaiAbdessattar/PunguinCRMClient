import { Component, OnInit } from '@angular/core';
import{ FormBuilder, FormGroup, Validators} from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.component.html',
  styleUrls: ['./loginn.component.sass']
})
export class LoginnComponent implements OnInit {
  loginForm : FormGroup;
  constructor( private fb : FormBuilder, private authService : AuthService,private http: HttpClient,private router : Router) 
  { 
  this.loginForm =this.fb.group({
  'Name' : ['', Validators.required] ,
  'Password' : ['', Validators.required],
   })
}
  ngOnInit(): void {

  }

  login(){
  // this.authService.login(this.loginForm.value).subscribe(data => {
  //  // localStorage.setItem('token', data.token);
  //  this.authService.saveToken(data['jwt']);
  //   })
    const credentials = JSON.stringify(this.loginForm.value);
    this.http.post("https://localhost:44378/api/Token", credentials, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      const token = (<any>response).token;
      localStorage.setItem("jwt", token);
     // this.invalidLogin = false;
      this.router.navigate(["/pages"]);
    }, err => {
     // this.invalidLogin = true;
    });
  }
 
get Name(){
  return this.loginForm.get('Name');
}
get Password(){
  return this.loginForm.get('Password');
}

}

