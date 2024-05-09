import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentsServiceService } from '../services/students-service.service';
import { HttpClientModule } from '@angular/common/http';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-student-add',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  providers:[StudentsServiceService],
  templateUrl: './student-add.component.html',
  styleUrl: './student-add.component.css'
})
export class StudentAddComponent {
  student:{id:string,email:string,name:string,age:string}= {id:"",email:"",name:"",age:""};
  constructor(private studentService:StudentsServiceService){

  }
  saveStudent(){
    this.student.id = uuidv4();
    this.studentService.saveStudent(this.student).subscribe({
      next:()=>{
        console.log("ok");
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }
}
