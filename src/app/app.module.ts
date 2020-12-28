import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginnComponent } from './pages/loginn/loginn.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthService } from './services/auth.service';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { CreatepostComponent } from './createpost/createpost.component';
import { CreateprofilesComponent } from './pages/createprofiles/createprofiles.component';
import { DashboardComponent } from './pages/Dashboard/Dashboard.Component'
import { ProfilesService } from './services/profiles.service';
import { AuthGuardService } from './services/auth-guard.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { DetailProfileComponent } from './pages/detail-profile/detail-profile.component';
import { HeaderComponent } from './header/header.component';
import { PagesComponent } from './pages/pages.component';
import { SidebarModule } from 'ng-sidebar';
  import { from } from 'rxjs';
// import { DetailProfileComponent } from '.pages/detail-profile/detail-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginnComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    RegisterComponent,
    CreatepostComponent,
    CreateprofilesComponent,
    DashboardComponent,
    DetailProfileComponent,
    HeaderComponent,
    PagesComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SidebarModule,
  ],
  providers: [AuthService, 
    ProfilesService,
     AuthGuardService,
     {
       provide : HTTP_INTERCEPTORS,
       useClass:TokenInterceptorService,
       multi: true
     }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
