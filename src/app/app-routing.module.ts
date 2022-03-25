import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './courses/course/course.component';
import { CreateStudentComponent } from './students/create-student/create-student.component';
import { EditStudentComponent } from './students/edit-student/edit-student.component';
import { EnglishCourseComponent } from './courses/english-course/english-course.component';
import { HomeComponent } from './homes/home/home.component';
import { MathCourseComponent } from './courses/math-course/math-course.component';
import { PhysicsCourseComponent } from './courses/physics-course/physics-course.component';
import { StudentInfoComponent } from './students/student-info/student-info.component';
import { UrduCourseComponent } from './courses/urdu-course/urdu-course.component';

const routes: Routes = [
  {
    path: "",
    component : HomeComponent
  },{
    path: "create-student",
    component : CreateStudentComponent
  },{
    path: "course",
    loadChildren:()=>import("./courses/courses.module").then(mod=>mod.CoursesModule)
  },{
    path: "student-info",
    loadChildren:()=>import("./students/students.module").then(mod=>mod.StudentsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
