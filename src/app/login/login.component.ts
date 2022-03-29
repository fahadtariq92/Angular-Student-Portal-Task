import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator } from '@angular/forms';
import { NgForm, Validators } from '@angular/forms';
import { StoreDataService } from "../store-data.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  teachersData:any;
  constructor(private storedataservice: StoreDataService, private route:Router) { }

  ngOnInit(): void {
  }

  loginTeacher = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required])
  })

  LoginTeacher(){
    this.storedataservice.loginteachers().subscribe((data:any)=>{
       this.teachersData = data;
       for (let i=0;i<this.teachersData.length;i++){
         if(this.teachersData[i].email === this.loginTeacher.get('email')?.value){
           if(this.teachersData[i].password === this.loginTeacher.get('password')?.value){
            setTimeout(() => {
              this.route.navigate([""]);
            }, 1000);
            this.storedataservice.login = true;
            break;
           }
         }
         if(i === this.teachersData.length-1){
          setTimeout(() => {
            alert("Email and Password not Exist");
          }, 1000);
         }
       }
    })
  }

  get email(){
    return this.loginTeacher.get('email');
  }

  get password(){
    return this.loginTeacher.get('password');
  }

}
