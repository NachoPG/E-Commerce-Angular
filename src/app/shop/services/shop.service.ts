import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Images } from '../interfaces/images.interface';
import { Observable } from 'rxjs';
import { Categories } from '../interfaces/categories.interface';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  private apiURL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getImagesForCarrousel(): Observable<Images[]> {
    const url = `${this.apiURL}/itemsImage`;
    return this.http.get<Images[]>(url);
  }

  getCategories(): Observable<Categories[]> {
    const url = `${this.apiURL}/categories`;
    return this.http.get<Categories[]>(url);
  }
}
