import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
import { HeaderComponent } from './header/header.component';
import { HerosectionComponent } from './herosection/herosection.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserPageComponent } from './user-page/user-page.component';
import { UserHeroComponent } from './user-hero/user-hero.component';
import { NgToastModule } from 'ng-angular-popup';
import { RegisterCoursesComponent } from './register-courses/register-courses.component';
import { CourseformComponent } from './courseform/courseform.component';
import { CalculatecgpaComponent } from './calculatecgpa/calculatecgpa.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // RouterOutlet,
    HerosectionComponent,
    HomeComponent,
    LogoutComponent,
    UserPageComponent,
    UserHeroComponent,
    RegisterCoursesComponent,
    CourseformComponent,
    CalculatecgpaComponent,
  ],
  imports: [
    // AuthModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgToastModule,
    SweetAlert2Module.forRoot(),
   
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
