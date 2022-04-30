import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './shop/pages/mainpage/mainpage.component';

const routes: Routes = [
  { path: '', component: MainpageComponent },
  {
    path: 'articlesCategory/:categoryId',
    loadChildren: () =>
      import('./articles-category/articles-category.module').then(
        (m) => m.ArticlesCategoryModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
