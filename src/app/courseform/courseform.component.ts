import { Component, OnInit } from '@angular/core';
import { StudentCourses } from '../types/Courses';
import { StudentCourse } from '../types/Course';
import { AuthapiService } from '../services/authapi.service';

@Component({
  selector: 'app-courseform',
  templateUrl: './courseform.component.html',
  styleUrls: ['./courseform.component.css'],
})
export class CourseformComponent implements OnInit {
  Courses: StudentCourse[] = [];
  newCourse: StudentCourse = {
    id: 0,
    courseCode: '',
    score: 0,
    unit: 0,
    point: 0,
  };
  score: any;
  index: any;
  TUnits: any;
  insertObj: StudentCourses = {
    userId: 0,
    courses: '',
  };

  // totalPoint:number = 0;
  // totalUnits:number = 0;
  //courseList:StudentCourse[] = [];

  // let sum = 0;

  // console.log(sum);

  constructor(private authapi : AuthapiService) {}

  ngOnInit(): void {
    this.score = 0;
    //localStorage.clear();
    // console.log(localStorage.getItem("courses"))
    //onsole.log(JSON.parse(JSON.stringify(localStorage.getItem("courses"))))
    this.Courses = [];
    this.TUnits = this.Courses.map((course) => course.unit).reduce((acc, curr) => {return acc + curr}, 0)
    this.index = 1;
  }


  
  addCourses() {
    this.newCourse = {
      courseCode: (<HTMLInputElement>document.getElementById('course_code'))
        .value,
      score: 0,
      unit: parseInt((<HTMLInputElement>document.getElementById('unit')).value),
      id: this.index,
      point: 0,
    };

    if(this.Courses.map((course) => course.courseCode).includes(this.newCourse.courseCode) ) {
      alert("This course has already been registered.")
      return;
    }else{
      console.log('yeaaah!!', this.newCourse);
      if (this.newCourse) {
        console.log('yeaaah!!', this.newCourse);
        let course = this.newCourse;
        this.Courses = [course, ...this.Courses];
        this.TUnits = this.Courses.map((course) => course.unit).reduce((acc, curr) => {return acc + curr}, 0)
        //this.Courses.push(course);
        this.index++;
        (<HTMLInputElement>document.getElementById('course_code')).value = '';
        // (<HTMLInputElement>document.getElementById('score')).value = '';
        (<HTMLInputElement>document.getElementById('unit')).value = '';
        //this.newCourse =
      } else {
        alert('Please enter courses');
      }
    }

  }

  remove(Id: number) {
    this.Courses = this.Courses.filter((course) => course.id !== Id);
  }

  // calcuateCgpa() {
  //   let totalScore = this.Courses.map((course) => course.unit * course.point).reduce(
  //     (acc, curr) => acc + curr,
  //     0
  //   );
  //   let totalUnits = this.Courses.map((course) => course.unit).reduce(
  //     (acc, curr) => acc + curr,
  //     0
  //   );
  //   let gpa = totalScore / totalUnits;
  //   this.score = gpa.toFixed(2);
  // }

  save() {
    //console.log(this.Courses);
    console.log(window.location.pathname);
    //const key = 'courses';
    // const value = localStorage.getItem(key);
    //localStorage.setItem(key, JSON.stringify(this.Courses));
    // JSON.parse(localStorage.getItem(key))
    //var userCourses = localStorage.getItem(key)
    if (window.location.pathname.includes('registerCourses')) {
      //var storedCourses = userCourses !== null ? JSON.parse(userCourses) : this.newCourse;
      //call a service to insert
      console.log(localStorage.getItem("userid"))
      var id = JSON.parse(localStorage.getItem("userid") || '0')
      console.log(id);
      if(id > 0){
        console.log("hereeeeeeeeeeeeeeeeeee")
        this.insertObj.userId = parseInt(id);
        this.insertObj.courses = this.Courses;
        console.log(this.insertObj)
        this.authapi.Insert(this.insertObj).subscribe((resp) => {
          alert(resp.message);
          //localStorage.clear();
        });
      }
     
    } else {
      alert('You need to login before you can save');
    }
    //console.log(window.location.href)
  }
  // // to get score points
  // getScorePoint(){
  //   console.log("inside function getScorePoint");
  //   console.log(this.score, "the scored entered");
  //   console.log("inside function getScorePoint");
  //   this.score= parseInt(
  //     (<HTMLInputElement>document.getElementById('score')).value
  //   );
  //   if(this.score>= 70){
  //     console.log(`${this.score} This function returns 5 for this score`)
  //     return 5;
  //   }
  //   if(this.score>= 60){
  //     console.log(`${this.score} This function returns 4 for this score`)
  //     return 4;
  //   }
  //   if(this.score>= 50){
  //     console.log(`${this.score} This function returns 3 for this score`)
  //     return 3;
  //   }
  //   if(this.score>= 45){
  //     console.log(`${this.score} This function returns 2 for this score`)
  //     return 2;
  //   }
  //   if(this.score>= 40){
  //     return 1;
  //   }

  //   return 0;
  // }
}
