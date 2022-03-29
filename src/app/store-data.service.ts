import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreDataService {
  url = 'http://localhost:3000/student';
  url2 = 'http://localhost:3000/teacher';
  sharedData:any;
  shareSpecData:any;
  shareSpecID:any;
  studName:any;
  studEmail:any;
  updateData:any;
  noStudent:any;
  private subject = new BehaviorSubject<any>('0');
  login=false;
  constructor(private http: HttpClient) { }


  headerButtonEvent(){
     this.subject.next(this.noStudent);
  }

  getheaderButtonEvent():Observable<any>{
    return this.subject.asObservable();
  }

  // countStudent(students:any){
  //     return this.noStudent = students;
  // }


  // getcountStudent(){
  //     return this.noStudent;
  // }


  students(){
    return this.http.get(this.url);
  }


  loginteachers(){
    return this.http.get(this.url2);
  }


  addStudents(data:any){
    return this.http.post(this.url,data);
  }

  addteachers(data:any){
    return this.http.post(this.url2,data);
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
