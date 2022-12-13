import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  marticNo: '',
  institution: ''
}

regForm!: FormGroup;
  res: any;
  constructor(private userService: AuthapiService, private route: Router, private toast: NgToastService, private formBuilder: FormBuilder) {

    this.regForm = this.formBuilder.group({
      firstName: ["", Validators.required],
password: ["", Validators.required],
lastName: ["", Validators.required],
institution: ["", Validators.required],
department: ["", Validators.required],
level: ["", Validators.required],
marticNo: ["", Validators.required],
email: ["", Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")],

    })
   }

  ngOnInit(): void {
  }
submit(){

  console.log('***', this.regForm.value);
  this.regForm.value.marticNo = this.regForm.value.marticNo == null ? 0 : parseInt(this.regForm.value.marticNo);
  this.userService.signUp(this.regForm.value).subscribe({
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
