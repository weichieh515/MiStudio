import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Data } from '../data'; 
@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {


  constructor(private authService: AuthService, private data: Data) { }

  ngOnInit() {
    this.checkLogin();
  }

  showUser(){
    console.log(this.data.user);
  }

  checkLogin(){
    if(this.authService.authenticated){
      this.data.user = JSON.parse(localStorage.getItem('user'));
    }
  }

}
