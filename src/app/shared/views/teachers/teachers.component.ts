import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ProfessorService } from '../../../services/professor.service';
import { RouterLink } from '@angular/router';
import { HeaderpageComponent } from "../../components/headerpage/headerpage.component";

@Component({
  selector: 'app-teachers',
  imports: [NgFor, RouterLink, HeaderpageComponent],
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.css'
})
export class TeachersComponent {
professors: any;

 constructor(private professorService: ProfessorService){}
 public ngOnInit(): void {
   this.professorService.getTeachers().subscribe(
    (teachers)=>{
      this.professors = teachers;
    },
    (error)=>{
      console.log("no se pudo recuperar profesores");
    });
 }

}
