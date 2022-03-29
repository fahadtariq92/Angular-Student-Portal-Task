import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './homes/home/home.component';
import { HeaderComponent } from './homes/header/header.component';
import { StudentInfoComponent } from './students/student-info/student-info.component';
import { CreateStudentComponent } from './students/create-student/create-student.component';
import { CourseComponent } from './courses/course/course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnglishCourseComponent } from './courses/english-course/english-course.component';
import { UrduCourseComponent } from './courses/urdu-course/urdu-course.component';
import { MathCourseComponent } from './courses/math-course/math-course.component';
import { PhysicsCourseComponent } from './courses/physics-course/physics-course.component';
import { EditStudentComponent } from './students/edit-student/edit-student.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


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
    EditStudentComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
