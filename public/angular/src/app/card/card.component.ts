import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
//
import { Member } from '../member';
import './card.js';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() member;

  @Input() edit;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goEditPage(id) {
    this.router.navigate(['/member-edit', id]);
  }


}
