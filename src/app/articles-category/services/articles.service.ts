import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Articles } from '../interfaces/articles.interface';
import { ArticleDetail } from '../interfaces/article-detail.interface';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  private apiURL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getArticlesByCategory(id: string): Observable<Articles[]> {
    const url = `${this.apiURL}/articles/${id}`;
    return this.http.get<Articles[]>(url);
  }

  getArticleDetail(id: string): Observable<ArticleDetail> {
    const url = `${this.apiURL}/article-detail/${id}`;
    return this.http.get<ArticleDetail>(url);
  }
}
