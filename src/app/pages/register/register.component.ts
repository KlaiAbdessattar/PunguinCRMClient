import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
 registerForm : FormGroup;
  constructor(private fb : FormBuilder, private authService:AuthService) 
  {
    this.registerForm = this.fb.group({
      'Name' : ['',Validators.required], //Ajouter des required msg depuis import
      'Email' : ['',Validators.required],
      'Password' : ['',Validators.required],
      'Lastname' : ['',Validators.required],
      'ProfileId' : ['',Validators.required],
     
    })
   } 

  ngOnInit(): void {
  }

  register(){
    this.authService.register(this.registerForm.value).subscribe(data=>{
      console.log(data); 

    }); // on a ajouté registerForm comme instance deFormGroup(FormGroup est l'un des 
                                                        //trois blocs de construction fondamentaux utilisés pour définir les 
                                                        //formulaires dans Angular, avec FormControl et FormArray)
  }

  // c'est pour COnstruitr les proproeté de l'objet a manipuler registerForm(FormGroup)                                         4
  get Name(){
return this.registerForm.get('Name')
  }
  get Email(){
    return this.registerForm.get('Email')
  }
  get Password(){
    return this.registerForm.get('Password')
  }
  get Lastname(){
    return this.registerForm.get('Lastname')
  }
  get ProfileId(){
    return this.registerForm.get('ProfileId')
  }
}
