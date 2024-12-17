import { Component, OnInit } from '@angular/core';
import { HeaderpageComponent } from '../../../shared/components/headerpage/headerpage.component';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-course',
  imports: [HeaderpageComponent, NgIf, NgFor, HeaderpageComponent,RouterLink],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit {
  course: any;
  private courseId: number | null = null;

  constructor (private courseService: CourseService, private route: ActivatedRoute){}
  public ngOnInit(): void {

    this.courseId = +(this.route.snapshot.paramMap.get('id') ?? 1);

    this.courseService.getCourseById(this.courseId).subscribe(
      (course)=> {
        console.log(course);
        this.course = course;
      },
      (error)=>{
        console.error('Error al obtener el curso:', error);
      }
    )
  }

}
