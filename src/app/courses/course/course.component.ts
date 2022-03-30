import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  data = [{
    course: "English",
    marks: 70
  },{
    course: "Urdu",
    marks: 75
  },{
    course: "Physics",
    marks: 80
  },{
    course: "Math",
    marks: 85
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
