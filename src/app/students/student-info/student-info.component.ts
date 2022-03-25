import { Component, OnInit } from '@angular/core';
import {StoreDataService} from "../../store-data.service";

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {
  student:any;
  sharedSpecData:any;
  imageResult:any;
  constructor(private storedataservice: StoreDataService) {
      
   }

  ngOnInit() : void {
    this.storedataservice.students().subscribe((data)=>{
      this.student = data;
    })
  }


  editStudent(sID: any){
    this.storedataservice.getSpecData(sID).subscribe((data:any)=>{
      this.sharedSpecData = data;
    })
  }


  deleteStudent(sID:any){
    this.storedataservice.deleteStudents(sID).subscribe((data:any)=>{
      this.ngOnInit();
    })
    this.storedataservice.headerButtonEvent();
  }


}
