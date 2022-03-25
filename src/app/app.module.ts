import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CourseComponent } from './course/course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnglishCourseComponent } from './english-course/english-course.component';
import { UrduCourseComponent } from './urdu-course/urdu-course.component';
import { MathCourseComponent } from './math-course/math-course.component';
import { PhysicsCourseComponent } from './physics-course/physics-course.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    StudentInfoComponent,
    CreateStudentComponent,
    CourseComponent,
    EnglishCourseComponent,
    UrduCourseComponent,
    MathCourseComponent,
    PhysicsCourseComponent,
    EditStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
