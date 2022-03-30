import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { FormControl, FormGroup, Validator } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StoreDataService } from "../../store-data.service";
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
  image:any;
  selectedFile:any;
  imageName: any;
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
      this.imageName = this.dataID.image;
      this.editStudent.setValue({
      "name": this.dataID.name,
      "email": this.dataID.email,
      "image": this.dataID.image
    })
    console.log("studen", this.editStudent)
    });
  }
  

  editStudent = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    image: new FormControl('')
  })

  onFileSelected(event:any){
    this.selectedFile = <File>event.target.files[0].name;
    var reader = new FileReader();
    this.editStudent.patchValue({
      image: this.selectedFile
    })
    this.imageName = this.selectedFile;
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




  EditStudent(){
     this.name = this.editStudent.get('name')?.value;
     this.email = this.editStudent.get('email')?.value;
     this.image = this.editStudent.get('image')?.value;
     this.storedataservice.setStudentData(this.sID,this.name,this.email,this.image).subscribe((data2:any)=>{
      this.router.navigate(['./student-info']);
  });
  }

  

}
