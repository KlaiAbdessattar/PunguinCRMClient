import { NgModule } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router';
import { CreateprofilesComponent } from './pages/createprofiles/createprofiles.component';
import { DashboardComponent } from './pages/Dashboard/Dashboard.Component';
import { DetailProfileComponent } from './pages/detail-profile/detail-profile.component';
//import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginnComponent } from './pages/loginn/loginn.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuardService } from './services/auth-guard.service';



const routes: Routes = [
  //{path: 'dashboard', component:DashboardComponent},
  {path:'loginn', component:LoginnComponent},
  {path:'pages', component:PagesComponent,canActivate:[ AuthGuardService],
  children: [
    {path:'creatprofiles', component:CreateprofilesComponent,canActivate:[ AuthGuardService]},
    {path:'detailprofile', component:DetailProfileComponent,canActivate:[ AuthGuardService]},
    {path:'home', component:DashboardComponent,canActivate:[ AuthGuardService]},
    {path:'register', component:RegisterComponent,canActivate:[ AuthGuardService]},
  ]
},
  {path: '', redirectTo: '/loginn', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
