import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowArticleComponent } from './pages/show-article/show-article.component';
import { ArticlesCategoryComponent } from './pages/articles-category/articles-category.component';

const routes: Routes = [
  { path: '', component: ArticlesCategoryComponent },
  { path: 'article/:articleId', component: ShowArticleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlesCategoryRoutingModule {}
