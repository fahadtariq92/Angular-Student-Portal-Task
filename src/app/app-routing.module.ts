import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { EnglishCourseComponent } from './english-course/english-course.component';
import { HomeComponent } from './home/home.component';
import { MathCourseComponent } from './math-course/math-course.component';
import { PhysicsCourseComponent } from './physics-course/physics-course.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { UrduCourseComponent } from './urdu-course/urdu-course.component';

const routes: Routes = [
  {
    path: "",
    component : HomeComponent
  },
  {
    path: "student-info",
    children:[
      {path: "", component: StudentInfoComponent},
      {path: "edit-student/:id",component: EditStudentComponent}
    ]
  },{
    path: "create-student",
    component : CreateStudentComponent
  },{
    path: "course",
    children: [
      {path: "", component : CourseComponent},
      {path: "english-course",component: EnglishCourseComponent},
      {path: "urdu-course",component: UrduCourseComponent},
      {path: "math-course",component: MathCourseComponent},
      {path: "physics-course",component: PhysicsCourseComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
