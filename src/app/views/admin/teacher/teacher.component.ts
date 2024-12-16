import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../../../services/professor.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HeaderpageComponent } from '../../../shared/components/headerpage/headerpage.component';

@Component({
  selector: 'app-teacher',
  imports: [NgFor, HeaderpageComponent, RouterLink],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent implements OnInit {
 professor: any;
 private professorId : number | null = null;
 constructor(private professorService: ProfessorService, private route: ActivatedRoute){}
 public ngOnInit(): void {
  this.professorId = +(this.route.snapshot.paramMap.get('id') ?? 1);

   this.professorService.getTeacher(this.professorId).subscribe(
    (teachers)=>{
      this.professor = teachers;
    },
    (error)=>{
      console.log("no se pudo recuperar profesores");
    });
 }

}
