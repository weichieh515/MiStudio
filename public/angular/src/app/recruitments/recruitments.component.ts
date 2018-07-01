import { Component, OnInit } from '@angular/core';
//
import { ApiService } from '../api.service';
import { Recruit } from '../recruit';


@Component({
  selector: 'app-recruitments',
  templateUrl: './recruitments.component.html',
  styleUrls: ['./recruitments.component.css']
})
export class RecruitmentsComponent implements OnInit {

  recruits: Recruit[];
  
  undergraduates: Recruit[] = [];
  graduates: Recruit[] = [];
  grads: Recruit[] = [];
  doctorials: Recruit[] = [];
  cents: Recruit[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
   this.getRecruits();
  }

  getRecruits() {
    this.apiService
      .getRecruits()
      .subscribe(data => {
        this.recruits = data;
        this.sort();
      });
  }

  sort(): void {
    for (var i = 0; i < this.recruits.length; i++) {
      if (this.recruits[i].type == 'undergraduate') {
        this.undergraduates.push(this.recruits[i]);
      }
      else if (this.recruits[i].type == 'graduate') {
        this.graduates.push(this.recruits[i]);
      }
      else if (this.recruits[i].type == 'grad') {
        this.grads.push(this.recruits[i]);
      }
      else if (this.recruits[i].type == 'doctorial') {
        this.doctorials.push(this.recruits[i]);
      }
      else if (this.recruits[i].type == 'cent') {
        this.cents.push(this.recruits[i]);
      }
    }
  }
}