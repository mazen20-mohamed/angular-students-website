import { Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { StudentAddComponent } from './student-add/student-add.component';

export const routes: Routes = [
    {path:"", component:StudentsComponent},
    {path:"students", component:StudentsComponent},
    {path:"student-detials/:id", component:StudentDetailsComponent},
    {path:"student-update/:id" , component:StudentUpdateComponent},
    {path:"student-add" , component:StudentAddComponent},
];
