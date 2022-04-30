import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categories } from '../../interfaces/categories.interface';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css'],
})
export class ListCategoriesComponent implements OnInit {
  @Input() categories: Categories[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToArticles(id: number) {
    this.router.navigate(['articlesCategory', id]);
  }
}
