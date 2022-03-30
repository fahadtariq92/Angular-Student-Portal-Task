import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-regular-course',
  templateUrl: './regular-course.component.html',
  styleUrls: ['./regular-course.component.css']
})
export class RegularCourseComponent implements OnInit {

  @Input() item=[{course:"",marks:0}];
  constructor() { }

  ngOnInit(): void {
  }

}
