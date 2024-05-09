import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { StudentsServiceService } from '../services/students-service.service';
import { HttpClientModule } from '@angular/common/http';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [HttpClientModule,RouterLink],
  providers:[StudentsServiceService],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})

export class StudentDetailsComponent implements OnInit{
  ID =  0;
  student:any;
  // subscription: Subscription = new Subscription();
  constructor(myActived : ActivatedRoute , private studentService:StudentsServiceService,private router: Router){
    this.ID = myActived.snapshot.params["id"];
  }

  ngOnInit() {
    this.studentService.getStudentById(this.ID).subscribe({
      next:(data)=>{
        this.student = data;
      },
      error:(err)=>{
        console.log(err);
      }
    });
    // this.subscription = this.studentService.currentStudent.subscribe(message => this.student = message)
  }
  deleteStudent(){
    this.studentService.deleteUserById(this.ID).subscribe({
      next:(data)=>{
        setTimeout(()=>{},2000);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  deleteSuccess(){
    this.router.navigate(['/students']);
  }
  update() {
    this.router.navigate(['/student-update/'+this.ID]);
  }
}
