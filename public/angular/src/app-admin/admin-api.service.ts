import { Injectable } from '@angular/core';
import { Headers, Http, Jsonp } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';
//
import { environment } from '../environments/environment';
//
import { News } from '../app/news';
import { Member } from '../app/member';
import { Recruit } from '../app/recruit';
import { Mail } from './mail';
import { Document } from '../app/document';

@Injectable()
export class AdminApiService {

  private newsUrl = environment.adminUrl + '/news';
  private memberUrl = environment.adminUrl + '/member';
  private recruitUrl = environment.adminUrl + '/recruit';
  private maillistUrl = environment.adminUrl + '/maillist';
  private userUrl = environment.adminUrl + '/user';


  //20170329
  private mailUrl = environment.adminUrl + '/mail';

  private documentUrl = environment.adminUrl;

  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http, private authHttp: AuthHttp) { }

  createNews(news: News) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.authHttp
      .post(this.newsUrl, JSON.stringify(news), { headers: headers })
      .map(response => response.json())
  }

  updateNews(id: string, news: News) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.authHttp
      .put(this.newsUrl + '/' + id, JSON.stringify(news), { headers: headers })
      .map(response => response.json())
  }

  deleteNews(id: string) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.authHttp
      .delete(this.newsUrl + '/' + id, { headers: headers })
      .map(response => response.json())
  }

  createMember(member: Member) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.authHttp
      .post(this.memberUrl, JSON.stringify(member), { headers: headers })
      .map(response => response.json())
  }

  updateMember(id: string, member: Member) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.authHttp
      .put(this.memberUrl + '/' + id, JSON.stringify(member), { headers: headers })
      .map(response => response.json())
  }

  updateMemberOrder(members: Member[]) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.authHttp
      .put(this.memberUrl, JSON.stringify(members), { headers: headers })
      .map(response => response.json())
  }

  deleteMember(id: string) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.authHttp
      .delete(this.memberUrl + '/' + id, { headers: headers })
      .map(response => response.json())
  }

  createRecruit(recruit: Recruit) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.authHttp
      .post(this.recruitUrl, JSON.stringify(recruit), { headers: headers })
      .map(response => response.json())
  }

  updateRecruit(id: string, recruit: Recruit) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.authHttp
      .put(this.recruitUrl + '/' + id, JSON.stringify(recruit), { headers: headers })
      .map(response => response.json())
  }

  deleteRecruit(id: string) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.authHttp
      .delete(this.recruitUrl + '/' + id, { headers: headers })
      .map(response => response.json())
  }

  getMaillist() {
    return this.authHttp.get(this.maillistUrl)
      .map(response => response.json());
  }

  //20170329
  sendMail(mail: Mail) {

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.authHttp
      .post(this.mailUrl, JSON.stringify(mail), { headers: headers })
      .map(response => response.json())

  }
  //2017/05/25
  createDocument(document: Document, doctype) {
    var headers = new Headers();
    this.documentUrl = environment.adminUrl + '/' + doctype;
    headers.append('Content-Type', 'application/json');
    return this.authHttp
      .post(this.documentUrl, JSON.stringify(document), { headers: headers })
      .map(response => response.json())
  }

  updateDocument(id: string, document: Document, doctype) {
    var headers = new Headers();
    this.documentUrl = environment.adminUrl + '/' + doctype;
    headers.append('Content-Type', 'application/json');
    return this.authHttp
      .put(this.documentUrl + '/' + id, JSON.stringify(document), { headers: headers })
      .map(response => response.json())
  }

  deleteDocument(id: string, doctype) {
    var headers = new Headers();
    this.documentUrl = environment.adminUrl + '/' + doctype;
    headers.append('Content-Type', 'application/json');
    return this.authHttp
      .delete(this.documentUrl + '/' + id, { headers: headers })
      .map(response => response.json())
  }


  getUserName(email: string) {

    return this.authHttp
      .get(this.memberUrl + '/email/' + email)
      .map(response => response.json())
  }

}
