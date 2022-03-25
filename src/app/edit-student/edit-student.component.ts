import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { FormControl, FormGroup, Validator } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StoreDataService } from "../store-data.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  student:any;
  sID:any;
  dataID:any;
  name:any;
  email:any;
  constructor(private route: ActivatedRoute, private storedataservice: StoreDataService,private router:Router) {
      
   }

  ngOnInit(): void {
    this.route.params.subscribe((param)=>{
      this.sID = param['id'];
      console.log(this.sID);
      this.storedataservice.setData(this.sID);
  })
    this.storedataservice.getData().subscribe((data:any)=>{
      this.dataID = data;
      this.editStudent.setValue({
      "name": this.dataID.name,
      "email": this.dataID.email
    })
    });
  }
  

  editStudent = new FormGroup({
     name: new FormControl(),
     email: new FormControl()
  })




  EditStudent(){
     this.name = this.editStudent.get('name')?.value;
     this.email = this.editStudent.get('email')?.value;
     console.log(this.name);
     console.log(this.email);
     console.log(this.sID);
     this.storedataservice.setStudentData(this.sID,this.name,this.email).subscribe((data2:any)=>{
      console.log(data2);
      this.router.navigate(['./student-info']);
  });
  }

}
