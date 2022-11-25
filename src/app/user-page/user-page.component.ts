import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  userId: any;

  constructor() { }

  ngOnInit(): void {
    this.userId = localStorage.getItem("userid")
    console.log(this.userId)
  }

}