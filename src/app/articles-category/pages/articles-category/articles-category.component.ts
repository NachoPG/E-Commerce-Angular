import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Articles } from '../../interfaces/articles.interface';
import { ArticlesService } from '../../services/articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles-category',
  templateUrl: './articles-category.component.html',
  styleUrls: ['./articles-category.component.css'],
})
export class ArticlesCategoryComponent implements OnInit {
  articlesData: Articles[] = [];

  constructor(
    private articlesService: ArticlesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ categoryId }) =>
          this.articlesService.getArticlesByCategory(categoryId)
        )
      )
      .subscribe({
        next: (response) => (this.articlesData = response),
        error: (err) => console.error(err),
      });
  }

  navigateToDetailArticle(id: number) {
    this.router.navigate([`/articlesCategory/${id}/article`, id]);
  }
}
