import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `

  <app-container>
  <router-outlet></router-outlet>
  </app-container>
  `
})
export class PagesComponent implements OnInit {

  constructor() { }
//   <app-layout>
//   <router-outlet></router-outlet>
// </app-layout>
  ngOnInit() {
  }

}
