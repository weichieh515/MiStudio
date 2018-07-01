import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
//
import { ApiService } from '../api.service';
import { News } from '../news';

import './news-list.js'

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  @Input() type: string;

  fullMode: boolean = false;
  private sub: any;
  newsList: News[];


  constructor(
    private location: Location,
    private apiService: ApiService,
    private route: ActivatedRoute,

  ) {

    this.sub = this.route.params.subscribe(params => {
      if (params['type']) {
        this.type = params['type'];
        this.fullMode = true;
        this.getNewsList(this.type);
      }
    });

  }

  ngOnInit() {
    if (this.fullMode == false) {

      if (this.location.path() != "") {
        this.fullMode = true;
      }
      this.getNewsList(this.type);
    }
  }

  getNewsList(type): void {
    this.apiService
      .getNewsList(type)
      .subscribe(data => {
        this.newsList = data;
      });
  }

}
