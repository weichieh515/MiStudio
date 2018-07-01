import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from'../api.service';
import { News } from '../news';

@Component({
  selector: 'app-news-listviewsss',
  templateUrl: './news-listview.component.html',
  styleUrls: ['./news-listview.component.css']
})
export class NewsListviewComponent implements OnInit {

  @Input() type: string;
  news: News[];
  fullMode: boolean;
  private sub: any;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {

    if (this.type == null) {
      this.sub = this.route.params.subscribe(params => {
        if (params['type'])
          this.type = params['type'];
        this.fullMode = true;

      });
    }
    this.getNews(this.type);
  }

  getNews(type): void {
    this.apiService
      .getNewsList(type)
      .subscribe(data => {
        this.news= data;
      });
  }

}
