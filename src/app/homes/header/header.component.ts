import { Component, OnInit } from '@angular/core';
import {StoreDataService} from "../../store-data.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  student:any;
  noStudents:any;
  getheaderEvent:Subscription;
  constructor(private storedataservice: StoreDataService) {
       this.getheaderEvent = this.storedataservice.getheaderButtonEvent().subscribe(()=>{
         this.ngOnInit();
       })
   }

  ngOnInit(): void {
    this.storedataservice.students().subscribe((data)=>{
       this.student = data;
       this.noStudents = this.student.length;
    })
  }


}
