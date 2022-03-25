import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreDataService {
  url = 'http://localhost:3000/student';
  sharedData:any;
  shareSpecData:any;
  shareSpecID:any;
  studName:any;
  studEmail:any;
  updateData:any;
  noStudent:any;
  private subject = new Subject<any>();
  constructor(private http: HttpClient) { }


  headerButtonEvent(){
     this.subject.next(this.noStudent);
  }

  getheaderButtonEvent():Observable<any>{
    return this.subject.asObservable();
  }

  countStudent(students:any){
      return this.noStudent = students;
  }


  getcountStudent(){
      return this.noStudent;
  }


  students(){
    return this.http.get(this.url);
  }


  addStudents(data:any){
    return this.http.post(this.url,data);
  }


  getSpecData(id:any){
    this.shareSpecData = this.http.get(this.url,id);
    return this.shareSpecData
  }


  deleteStudents(id:any){
     return this.http.delete(`${this.url}/${id}`)
  }

  setData(data:any){
     this.shareSpecID = data;
  }

  getData(){
    this.shareSpecData = this.http.get(`${this.url}/${this.shareSpecID}`);
    return this.shareSpecData;
  }

  setStudentData(id:any,name:any,email:any){
     const updateurl = `http://localhost:3000/student/${id}`;
     this.updateData = this.http.put(updateurl,{
       name:name,
       email:email
     });
     return this.updateData;
  }
}
