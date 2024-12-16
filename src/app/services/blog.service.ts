import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private jsonPath = 'assets/blogs.json';
  constructor(private http: HttpClient) { }

  getBlogs(): Observable<any[]> {

    return this.http.get<{ blogs: any[] }>(this.jsonPath).pipe(
          map(response => response.blogs)
        );
  }

  getBlogById(id: number): Observable<any | undefined>{
    return this.getBlogs().pipe(map(blogs=> blogs.find(blog=> blog.id === id))); 
  }
}
