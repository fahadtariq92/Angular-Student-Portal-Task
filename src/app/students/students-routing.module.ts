import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentInfoComponent } from './student-info/student-info.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

const routes: Routes = [
      {path: "", component: StudentInfoComponent},
      {path: "edit-student/:id",component: EditStudentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
