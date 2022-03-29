import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator } from '@angular/forms';
import { NgForm, Validators } from '@angular/forms';
import { StoreDataService } from "../store-data.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private storedataservice: StoreDataService, private route:Router) { }

  ngOnInit(): void {
  }

  registerTeacher = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required])
  })

  RegisterTeacher(){
    this.storedataservice.addteachers(this.registerTeacher.value).subscribe((data)=>{
      alert("Account Created Successfully");
      this.route.navigate(['./login']);
    })
    this.storedataservice.headerButtonEvent();
  }

  get name(){
    return this.registerTeacher.get('name');
  }

  get email(){
    return this.registerTeacher.get('email');
  }

  get password(){
    return this.registerTeacher.get('password');
  }

}
