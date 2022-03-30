import { Component, Input, OnInit } from '@angular/core';
import {StoreDataService} from "../../store-data.service";
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  student:any;
  noStudents:any;
  getheaderEvent:Subscription;
  getShow:any;
  logincondition = false;
  registercondition = false;
  logoutcondition = true;
  constructor(private storedataservice: StoreDataService, private spinner: NgxSpinnerService, private route:Router) {
    this.getheaderEvent = this.storedataservice.getheaderButtonEvent().subscribe((res)=>{
      this.ngOnInit()
    })
   }

  ngOnInit(): void {
    this.spinner.show();
    this.storedataservice.students().subscribe((data)=>{
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
       this.student = data;
       this.noStudents = this.student.length;
       console.log("hello");
    })
    if(this.storedataservice.login === true){
      this.logincondition = true;
      this.registercondition = true;
      this.logoutcondition = false;
    }
  }


  loginbtn(){
     this.route.navigate(['/login']);
  }

  registerbtn(){
    this.route.navigate(['/register']);
  }
  
  logoutbtn(){
    setTimeout(()=>{
      this.route.navigate(['/login']);
      this.storedataservice.login = false;
    },1000)
  }


}
