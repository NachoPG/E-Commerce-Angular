import { Component, Input, OnInit } from '@angular/core';
import { ArticleDetail } from '../../interfaces/article-detail.interface';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs);

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css'],
})
export class DetailArticleComponent implements OnInit {
  @Input() dataArticleDetail!: ArticleDetail;
  constructor() {}

  ngOnInit(): void {}
}
