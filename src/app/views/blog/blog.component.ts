import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgFor, NgIf } from '@angular/common';
import { HeaderpageComponent } from "../../shared/components/headerpage/headerpage.component";

@Component({
  selector: 'app-blog',
  imports: [NgFor, NgIf, RouterLink, HeaderpageComponent, HeaderpageComponent],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, OnDestroy {
  blog: any;
  recentPosts: any[] = [];
  private articleId: number | null = null;
  private routeSub: Subscription | undefined;

  constructor(private blogService: BlogService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Suscripción a los cambios de parámetros en la ruta
    this.routeSub = this.route.paramMap.subscribe(params => {
      this.articleId = +params.get("id")!;
      this.recargarPagina();
    });
  }

  ngOnDestroy(): void {
    // Limpiar la suscripción para evitar posibles memory leaks
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

  public recargarPagina(): void {
    // Cargar el blog específico
    if(this.articleId != null){
      this.blogService.getBlogById(this.articleId).subscribe(blog => {
        this.blog = blog;
      });
    }

    // Cargar los posts recientes
    this.blogService.getRecentPosts().subscribe(posts => {
      this.recentPosts = posts;
    });
  }
}
