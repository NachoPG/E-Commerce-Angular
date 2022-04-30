import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { ArticleDetail } from '../../interfaces/article-detail.interface';

@Component({
  selector: 'app-show-article',
  templateUrl: './show-article.component.html',
  styleUrls: ['./show-article.component.css'],
})
export class ShowArticleComponent implements OnInit {
  articleDetailApi!: ArticleDetail;

  constructor(
    private articlesService: ArticlesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ articleId }) =>
          this.articlesService.getArticleDetail(articleId)
        ),
        tap(console.log)
      )
      .subscribe({
        next: (response) => (this.articleDetailApi = response[0]),
        error: (err) => console.error(err),
      });
  }
}
