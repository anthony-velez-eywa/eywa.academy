import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProfessorService } from '../../services/professor.service';

@Component({
  selector: 'app-home',
  imports: [NgFor, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  courses: any;
  professors: any;

  constructor(private courseService: CourseService, private professorService: ProfessorService){}
  public ngOnInit(): void {
    // Obtener cursos
this.courseService.getCourses().subscribe({
  next: (courses) => {
    this.courses = courses; // Asignar los cursos recuperados a la variable 'courses'
  },
  error: (error) => {
    console.log("Hubo un error al cargar los cursos"); // Manejo de errores si no se pueden cargar los cursos
  },
  complete: () => {
    console.log("Carga de cursos completada"); // Acciones a realizar cuando la carga de cursos se completa
  }
});

// Obtener profesores
this.professorService.getTeachers().subscribe({
  next: (teachers) => {
    this.professors = teachers; // Asignar los profesores recuperados a la variable 'professors'
  },
  error: (error) => {
    console.log("No se pudo recuperar los profesores"); // Manejo de errores si no se pueden cargar los profesores
  },
  complete: () => {
    console.log("Carga de profesores completada"); // Acciones a realizar cuando la carga de profesores se completa
  }
});

  }
}
