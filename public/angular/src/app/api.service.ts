import { Injectable } from '@angular/core';
import { Headers, Http, Jsonp } from '@angular/http';
import { environment } from 'environments/environment';
import 'rxjs/add/operator/map';


@Injectable()
export class ApiService {

  private url = environment.url;

  constructor(private http: Http) { }

  getNews(id) {
    return this.http.get(this.url + '/news/' + id)
      .map(response => response.json());
  }

  getNewsList(type: string) {
    return this.http.get(this.url + '/news/list/' + type)
      .map(response => response.json());
  }

  getMember(id) {
    return this.http.get(this.url + '/member/' + id)
      .map(response => response.json());
  }

  getMembers() {
    return this.http.get(this.url + '/members')
      .map(response => response.json());
  }

  getDocuments() {
    return this.http.get(this.url + '/document')
      .map(response => response.json());
  }
  getExams() {
    return this.http.get(this.url + '/exam')
      .map(response => response.json());
  }
  getCourses() {
    return this.http.get(this.url + '/course')
      .map(response => response.json());
  }
  getDocument(id,path:String) {
    return this.http.get(this.url + '/'+path+'/' + id)
      .map(response => response.json());
  }

  getRecruits() {
    return this.http.get(this.url + '/recruits')
      .map(response => response.json());
  }

  getRecruit(id) {
    return this.http.get(this.url + '/recruit/' + id)
      .map(response => response.json());
  }

  getMaillist(){
    return this.http.get(this.url + '/maillist')
     .map(response => response.json());
  }
  

}
