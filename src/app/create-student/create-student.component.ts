import { Component, OnInit,Input } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { FormControl, FormGroup, Validator } from '@angular/forms';
import { StoreDataService } from "../store-data.service";
import {Router} from '@angular/router';
import { isNull } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  studentData:any;
  selectedFile:any;
  noStudents:any;
  constructor(private storedataservice: StoreDataService, private route:Router) {
   }

  ngOnInit(): void {
    this.storedataservice.students().subscribe((data)=>{
      this.studentData = data;
      this.noStudents = this.studentData.length;
    })
  }
 
  createStudent = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    image: new FormControl('')
  })

  url:any;

  onFileSelected(event:any){
    this.selectedFile = <File>event.target.files[0].name;
    var reader = new FileReader();
    this.createStudent.patchValue({
      image: this.selectedFile
    })
    // reader.onload = ()=> {
    //     this.url = reader.result;
    //     console.log("abcccccsdgfefgdfg",this.url);
    //     this.createStudent.patchValue({
    //       image: reader.result
    //     });
    //     this.createStudent.get('image')?.setValue('this.url');
    //     this.createStudent.controls.image.setValue(this.url);
    // }
    // reader.readAsDataURL(this.selectedFile); 
  }


  AddStudent(){ 
       this.storedataservice.addStudents(this.createStudent.value).subscribe((data)=>{
         console.warn(data);
        //  this.route.navigate(['./student-info']);
       })
       this.storedataservice.headerButtonEvent();
  }

  get name(){
    return this.createStudent.get('name');
  }

  get email(){
    return this.createStudent.get('email');
  }




}
