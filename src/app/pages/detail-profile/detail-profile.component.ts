import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { profil } from 'src/app/models/Profil';
import { ProfilesService } from 'src/app/services/profiles.service';

@Component({
  selector: 'app-detail-profile',
  templateUrl: './detail-profile.component.html',
  styleUrls: ['./detail-profile.component.sass']
})
export class DetailProfileComponent implements OnInit {
   profiles: Array<profil>;
  constructor(private profileservice : ProfilesService,private  http : HttpClient) { }

  ngOnInit(): void {
    this.profileservice.getProfile().subscribe(profiles=>{
      this.profiles = profiles;
      console.log(this.profiles);
    })
    // this.http.get("https://localhost:44378/api/profil", {
    //   headers: new HttpHeaders({
    //     "Content-Type": "application/json"
    //   })
    // }).subscribe(response => {
    //   this.profiles = response;
    // }, err => {
    //   console.log(err)
    // });
    // console.log(this.profiles)
  }


}
