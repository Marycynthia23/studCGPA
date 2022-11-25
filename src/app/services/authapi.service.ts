import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ApiResponse } from '../model/ApiResponse.model';
import { MyHttpService } from './my-http.service';
import { map, Observable } from 'rxjs';
import {Login} from '../types/Form';
import {StudentCourses} from '../types/Courses';
import { Signup } from '../types/Signup';
import { CourseCode } from '../types/CourseCode';

@Injectable({
  providedIn: 'root'
})
export class AuthapiService {
  post<T>(arg0: string) {
    throw new Error('Method not implemented.');
  }

  private baseURL:string = 'https:localhost:44320/api/User'
  constructor(private http : MyHttpService) { }

  signUp(userObj: any){
    return this.http.post<any>(`${this.baseURL}/register`, userObj)
  }

  // logIn(loginObj: any){
  //   return this.http.post<any>(`${this.baseURL}/authenticate`, loginObj) 

  // }

  logIn(loginObj: Login): Observable<ApiResponse> {
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    console.log(loginObj)
    const response = this.http.post<any>(
      `${this.baseURL}/authenticate`,
      loginObj,
    );
    console.log(response)
    return response;
  }
  Register(userObj: any): Observable<ApiResponse> {
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    console.log(userObj)
    const response = this.http.post<any>(
      `${this.baseURL}/register`,
      userObj,
    );
    console.log(response)
    return response;
  }

GetStudentById(id: any): Observable<Signup> {
return this.http.get<Signup>(this.baseURL + '/getStudentById?Id=' + id).pipe(
  map((data) => {
    return data;
  })
)
}

  Insert(insertObj: StudentCourses): Observable<ApiResponse> {
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    console.log(insertObj)
    const response = this.http.post<any>(
      `${this.baseURL}/savecourse`,
      insertObj,
    );
    console.log(response)
    return response;
  }
  Get(id: number): Observable<ApiResponse> {
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    console.log(id)
    const response = this.http.get<any>(
      `${this.baseURL}/getcourse?id=${id}`, 
   
    );
    console.log(response)
    return response;
  }

  GetCourseCode(): Observable <CourseCode[]> {
    return this.http.get<CourseCode[]>(this.baseURL).pipe(
      map((data) => {
        return data;
      })
    );

  }
}
