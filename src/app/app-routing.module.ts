import { NgModule } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router';
import { CreateprofilesComponent } from './pages/createprofiles/createprofiles.component';
//import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginnComponent } from './pages/loginn/loginn.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuardService } from './services/auth-guard.service';



const routes: Routes = [
  //{path: 'dashboard', component:DashboardComponent},
  {path: 'loginn', component:LoginnComponent},
  {path: 'register', component:RegisterComponent},
  {path:'creatprofiles', component:CreateprofilesComponent, canActivate:[ AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
