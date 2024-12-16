import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  imports: [NgFor,NgIf],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  blog : any;
  private articleId: number | null = null;
  constructor(private blogService: BlogService, private route: ActivatedRoute ){}

  public ngOnInit(): void {
    this.articleId = +(this.route.snapshot.paramMap.get("id") ?? 1);
    this.blogService.getBlogById(this.articleId).subscribe(
      (blog)=>{
        this.blog = blog;
      }
    )
  }
}
