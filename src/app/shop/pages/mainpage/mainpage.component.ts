import { Component, OnInit } from '@angular/core';
import { Categories } from '../../interfaces/categories.interface';
import { Images } from '../../interfaces/images.interface';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
})
export class MainpageComponent implements OnInit {
  imagesApi: Images[] = [];
  categoriesApi: Categories[] = [];

  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.getImagesApi();
    this.getCategories();
  }

  getImagesApi(): void {
    this.shopService.getImagesForCarrousel().subscribe({
      next: (response) => (this.imagesApi = response),
      error: (error) => console.error(error),
    });
  }

  getCategories(): void {
    this.shopService.getCategories().subscribe({
      next: (response) => (this.categoriesApi = response),
      error: (err) => console.error(`Error: ${err}`),
    });
  }
}
