import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  private jsonPath = 'assets/professors.json';
  constructor( private http: HttpClient) { }


  getTeachers(): Observable<any[]>{
    let teachers = this.http.get<{teachers:any[]}>(this.jsonPath).pipe(map(response=>response.teachers));
    return teachers;
  }

  getTeacher(id: number) : Observable<any | undefined>{
    return this.getTeachers().pipe(map(teachers=> teachers.find(teacher => teacher.id === id)));
  }
}
