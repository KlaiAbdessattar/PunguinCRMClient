import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfilesService } from 'src/app/services/profiles.service';

@Component({
  selector: 'app-createprofiles',
  templateUrl: './createprofiles.component.html',
  styleUrls: ['./createprofiles.component.sass']
})
export class CreateprofilesComponent {
  creatprofileForm : FormGroup;
  constructor(private fb : FormBuilder,private  profilesService : ProfilesService) { 
    this.creatprofileForm = this.fb.group({
      'Name' : ['',Validators.required]  
    })
  }

  ngOnInit(): void {
  }
  get Name (){
    return this.creatprofileForm.get('Name');
  }
  create(){
this.profilesService.create(this.creatprofileForm.value).subscribe(res=>{
  console.log(res);
});
  }
}
