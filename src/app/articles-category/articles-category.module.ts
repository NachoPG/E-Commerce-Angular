import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesCategoryRoutingModule } from './articles-category-routing.module';
import { ArticlesCategoryComponent } from './pages/articles-category/articles-category.component';
import { ArticleComponent } from './components/article/article.component';
import { ShowArticleComponent } from './pages/show-article/show-article.component';
import { DetailArticleComponent } from './components/detail-article/detail-article.component';

@NgModule({
  declarations: [
    ArticlesCategoryComponent,
    ArticleComponent,
    ShowArticleComponent,
    DetailArticleComponent,
  ],
  imports: [CommonModule, ArticlesCategoryRoutingModule],
})
export class ArticlesCategoryModule {}
