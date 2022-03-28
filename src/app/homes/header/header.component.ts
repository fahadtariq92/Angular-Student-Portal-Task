import { Component, Input, OnInit } from '@angular/core';
import {StoreDataService} from "../../store-data.service";
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

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

  @Input() studentlngt: any;
  constructor(private storedataservice: StoreDataService, private spinner: NgxSpinnerService) {
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
  }


}
