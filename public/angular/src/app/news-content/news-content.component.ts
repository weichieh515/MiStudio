import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//
import { ApiService } from '../api.service';
import { News } from '../news';

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.css']
})
export class NewsContentComponent implements OnInit {

  @Input() news: News;

  id: any;
  private sub: any;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.news == null) {
      this.sub = this.route.params.subscribe(params => {
        if (params['id'])
          this.id = params['id'];
        this.getNews(this.id);
      });
    }
  }

  getNews(id): void {
    this.apiService
      .getNews(id)
      .subscribe(data => {
        this.news = data;
      });
  }


}
