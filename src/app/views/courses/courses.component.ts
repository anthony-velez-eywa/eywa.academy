import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-courses',
  imports: [RouterLink, NgFor],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})

export class CoursesComponent implements OnInit {
  courses : any;
  constructor (private courseService: CourseService){}

  public ngOnInit(): void {
    
    this.courseService.getCourses().subscribe({
      next: (courses) => {
        this.courses = courses;
      },
      error: (error) => {
        console.log("Error al recuperar cursos", error);
      },
      complete: () => {
        console.log("Carga de cursos completada.");
      }
    });
  }
}
