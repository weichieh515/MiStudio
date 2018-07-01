import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
//
import { Recruit } from '../recruit';

@Component({
  selector: 'app-recruit-content',
  templateUrl: './recruit-content.component.html',
  styleUrls: ['./recruit-content.component.css']
})
export class RecruitContentComponent implements OnInit {

  @Input() type: string;
  @Input() recruits: Recruit[];
  @Input() edit: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goEditPage(id) {
    this.router.navigate(['/recruit-edit', id]);
  }


}
