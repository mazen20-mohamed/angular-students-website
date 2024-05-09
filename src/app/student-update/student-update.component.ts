  import { Component, OnInit } from '@angular/core';
  import { StudentsServiceService } from '../services/students-service.service';
  import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

  @Component({
    selector: 'app-student-update',
    standalone: true,
    imports: [HttpClientModule,FormsModule,RouterLink],
    providers:[StudentsServiceService],
    templateUrl: './student-update.component.html',
    styleUrl: './student-update.component.css'
  })
  export class StudentUpdateComponent implements OnInit{
    student:any;
    ID =0;
    constructor(private studentService:StudentsServiceService,private router:Router,private myActived:ActivatedRoute){
      this.ID = myActived.snapshot.params["id"];
    }

    ngOnInit(){
      this.studentService.getStudentById(this.ID).subscribe({
        next:(data)=>{
          this.student = data;
        },
        error:(err)=>{
          console.log(err);
        }
      });
    }
    
    update(){
      this.studentService.updateUserById(parseInt(this.student.id),this.student).subscribe({
        next:(data)=>{
        }
      });
    }
  }
