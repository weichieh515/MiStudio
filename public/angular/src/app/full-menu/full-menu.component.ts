import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-full-menu',
  templateUrl: './full-menu.component.html',
  styleUrls: ['./full-menu.component.css']
})
export class FullMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo(section) {
    this.router.navigate(['/introduction#'+section]);
  }

}
