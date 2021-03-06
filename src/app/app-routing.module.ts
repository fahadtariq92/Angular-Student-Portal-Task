import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './students/create-student/create-student.component';
import { HomeComponent } from './homes/home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: "",
    component : HomeComponent,
    canActivate: [AuthGuard]
  },{
    path: "login",
    component: LoginComponent
  },{
    path: "register",
    component: RegisterComponent
  },{
    path: "create-student",
    component : CreateStudentComponent,
    canActivate: [AuthGuard]
  },{
    path: "course",
    loadChildren:()=>import("./courses/courses.module").then(mod=>mod.CoursesModule),
    // canActivate: [AuthGuard]
  },{
    path: "student-info",
    loadChildren:()=>import("./students/students.module").then(mod=>mod.StudentsModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
