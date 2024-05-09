import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsServiceService {

  constructor(private readonly http:HttpClient) {
  }

  private readonly DB_LINK = "http://localhost:3000/students";
  
  // students = new BehaviorSubject({id:"1",name:"",age:"",email:""});
  
  // setData(data: {id:string,name:string,age:string,email:string}) {
  //   this.students.next(data);
  // }

  // currentStudent = this.students.asObservable();

  getAllStudents(){
    return this.http.get(this.DB_LINK);
  }

  getStudentById(id:number){
    return this.http.get(this.DB_LINK + '/'+id);
  }

  deleteUserById(id:number){
    return this.http.delete(this.DB_LINK+'/'+id);
  }

  updateUserById(id:number,student:{id:string,name:string,age:string,email:string}){
    return this.http.put(this.DB_LINK+'/'+id,student );
  }

  saveStudent(student:any){
    return this.http.post(this.DB_LINK,student);
  }
}
