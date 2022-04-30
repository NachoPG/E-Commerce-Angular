import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { PhotoCardsComponent } from './components/photo-cards/photo-cards.component';
import { ListCategoriesComponent } from './components/list-categories/list-categories.component';

@NgModule({
  declarations: [
    MainpageComponent,
    CarrouselComponent,
    PhotoCardsComponent,
    ListCategoriesComponent,
  ],
  imports: [CommonModule],
  exports: [MainpageComponent],
})
export class ShopModule {}
