import { Component, OnInit } from '@angular/core';
//
import { environment } from '../../environments/environment';
import { ApiService } from '../../app/api.service';
import { AdminApiService } from '../admin-api.service';
import { News } from '../../app/news';




@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  wysiwygUrl = environment.adminUrl + '/wysiwyg';
  
  ckeditorContent: string = '';
  news: News[];

  constructor(private apiService: ApiService, private adminApiService: AdminApiService) { }

  ngOnInit() {
    //this.getNews();
  }
  getNews(): void {
    this.apiService
      .getNewsList('dept')
      .subscribe(data => {
        this.news = data;
        console.log(this.news);
      });
  }

  createNews(news: News): void {
    this.adminApiService
      .createNews(news)
      .subscribe(result => {
        this.news.push(result);
        console.log(this.news);
      });
  }
  show() {
    console.log(this.ckeditorContent);
  }

}
