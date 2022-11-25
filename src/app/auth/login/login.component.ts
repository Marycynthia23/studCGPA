import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Login } from 'src/app/types/Form';
import { AuthapiService } from './../../services/authapi.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm!: FormGroup 
  loginObj : Login = {
    Email : '',
    Password : ''
  } 
  public signUpForm !: FormGroup
  employees: any;

  constructor(private toast: NgToastService, private fb: FormBuilder, private authapi: AuthapiService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['', Validators.required]
    })
  }


 onLogin(){
  console.log("i got here")
  this.authapi.logIn(this.loginObj).subscribe((resp) => {
    
    if(resp.user){
      console.log(resp.user, "CHECKING USER")
      
      this.toast.success({detail: "Logged in Successfully", summary: "You're now logged in", duration: 4000})
      this.router.navigate([`home/${resp.user.id}`])
    }
    else{
      
      this.toast.error({detail: "Invalid Credential", summary: "Please check your details and try again", duration: 4000})
    }
  })
 }


}
