import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppModule } from '../app.module';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
  ],
 
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class AuthModule { }
