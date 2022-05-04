import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticlesApiService } from '@nest-app/article/data-access-api';

@Component({
  selector: 'nest-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  articles$ = this.articles.articleControllerGetAllArtciles();
  constructor(private http: HttpClient, private articles: ArticlesApiService) {}

}
