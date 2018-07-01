import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { Member } from '../member';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members: Member[];
  faculty: Member[] = [];
  staff: Member[]= [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getMembers();
  }

  getMembers(): void {
    this.apiService
      .getMembers()
      .subscribe(data => {
        this.members = data;
       this.sort();
      });
  }

  sort(): void {
    for (var i = 0; i < this.members.length; i++) {
      if (this.members[i].type == 'faculty') {
        this.faculty.push(this.members[i]);
      } else if (this.members[i].type == 'staff') {
        this.staff.push(this.members[i]);
      }
    }
  }



}
