import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Articles } from '../../interfaces/articles.interface';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs);

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @Input() dataArticles: Articles[] = [];
  @Output() onClick: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  navigateDetailArticle(id: number) {
    this.onClick.emit(id);
  }
}
