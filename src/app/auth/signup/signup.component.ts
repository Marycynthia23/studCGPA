import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthapiService } from 'src/app/services/authapi.service';
import { Signup } from 'src/app/types/Signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
form: Signup ={
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  department: '',
  level: '',
  matricno: '',
  institution: ''
}
  res: any;
  constructor(private userService: AuthapiService, private route: Router, private toast: NgToastService) { }

  ngOnInit(): void {
  }
submit(){
  this.userService.signUp(this.form).subscribe({
    next: (response) => {
      this.form = response;
      this.toast.success({detail: "User Registered", summary: "succesfull", duration: 4000})  
      this.route.navigate(['login']);
      console.log(this.form)
  }
  })
  // this.userService.signUp(this.form).subscribe((res: any)=> {
  //   this.form = res;
  //   this.toast.success({detail: "User Registered", summary: "succesfull", duration: 4000})

  // })
  // console.log(this.form)
}


}
