import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private jsonPath = 'assets/courses.json'; // Ruta del archivo JSON

  constructor(private http: HttpClient) {}

  /**
   * Obtiene todos los cursos desde el archivo JSON.
   * @returns Observable con la lista de cursos.
   */
  getCourses(): Observable<any[]> {
    let courses = this.http.get<{ courses: any[] }>(this.jsonPath).pipe(
      map(response => response.courses)
    );
    console.log(courses);
    return courses;
  }

  /**
   * Obtiene un curso por su ID.
   * @param id ID del curso.
   * @returns Observable con el curso encontrado o undefined si no existe.
   */
  getCourseById(id: number): Observable<any | undefined> {
    return this.getCourses().pipe(
      map(courses => courses.find(course => course.id === id))
    );
  }
}
