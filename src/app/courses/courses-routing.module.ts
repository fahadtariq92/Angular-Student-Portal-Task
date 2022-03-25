import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { EnglishCourseComponent } from './english-course/english-course.component';
import { UrduCourseComponent } from './urdu-course/urdu-course.component';
import { MathCourseComponent } from './math-course/math-course.component';
import { PhysicsCourseComponent } from './physics-course/physics-course.component';

const routes: Routes = [
      {path: "", component : CourseComponent},
      {path: "english-course",component: EnglishCourseComponent},
      {path: "urdu-course",component: UrduCourseComponent},
      {path: "math-course",component: MathCourseComponent},
      {path: "physics-course",component: PhysicsCourseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule {
  
 }
