import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DndModule } from 'ng2-dnd';

//
import { AdminApiService } from '../admin-api.service';
//
import { ApiService } from '../../app/api.service';
import { Member } from '../../app/member';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members: Member[];
  faculty: Member[] = [];
  staff: Member[] = [];
  

  constructor(private adminApiService : AdminApiService, private apiService: ApiService, private router: Router) { }

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

  updateOrder(members:Member[]): void {
      var tempMembers :Member[]=[];
      for(var i =0; i<members.length;i++){
        var tempMember:Member = members[i];
        tempMember.order = i
        tempMembers.push(tempMember);
      }
      this.adminApiService
      .updateMemberOrder(tempMembers)
      .subscribe(data => {
        if (data.error_code != 0) {
          alert(data.error_code)
        } else {
          alert('編輯成功');
        }
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



  goAddPage(type){
      this.router.navigate(['/member-add', type]);
  }

}
