import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Maillist } from '../maillist';

@Component({
  selector: 'app-maillist',
  templateUrl: './maillist.component.html',
  styleUrls: ['./maillist.component.css']
})
export class MaillistComponent implements OnInit {

  maillist_s: Maillist[];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  getMaillist():void{
    this.apiService
      .getMaillist()
      .subscribe(data => {
        this.maillist_s = data;
        console.log(this.maillist_s);
      })
  }

}
