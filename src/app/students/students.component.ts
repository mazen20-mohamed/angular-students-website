import { Component, OnInit } from '@angular/core';
import { StudentsServiceService } from '../services/students-service.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [HttpClientModule,RouterLink,RouterModule],
  providers:[StudentsServiceService],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit{
  students:any;
  
  constructor(private studentService:StudentsServiceService){
  }
  ngOnInit() {
    this.studentService.getAllStudents().subscribe({
      next:(data) =>{this.students = data;},
      error:(err)=>{console.log(err);}
    });
  } 
}
