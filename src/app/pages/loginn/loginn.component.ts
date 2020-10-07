import { Component, OnInit } from '@angular/core';
import{ FormBuilder, FormGroup, Validators} from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.component.html',
  styleUrls: ['./loginn.component.sass']
})
export class LoginnComponent implements OnInit {
  loginForm : FormGroup;
  constructor( private fb : FormBuilder, private authService : AuthService) 
  { 
  this.loginForm =this.fb.group({
  'Name' : ['', Validators.required] ,
  'Password' : ['', Validators.required],
   })
}
  ngOnInit(): void {

  }

  login(){
  this.authService.login(this.loginForm.value).subscribe(data => {
    this.authService.saveToken(data['token']);
    })
  }
 
get Name(){
  return this.loginForm.get('Name');
}
get Password(){
  return this.loginForm.get('Password');
}

}

