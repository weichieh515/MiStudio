import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private router: Router) { }

   ngOnInit() {
       this.router.events.subscribe((event) => {
         var re = /\/introduction/;

           if (!(event instanceof NavigationEnd) || (event.url.match(re))) {
               return;
           }
           window.scrollTo(0, 0);
       });
   }


  title = 'app works!';
}
