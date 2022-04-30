import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesCategoryComponent } from './articles-category.component';

describe('ArticlesCategoryComponent', () => {
  let component: ArticlesCategoryComponent;
  let fixture: ComponentFixture<ArticlesCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
