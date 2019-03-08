import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  @ViewChild('MenuSidenav') MenuSidenav: any;
  constructor() { }


  ngOnInit() {
  }

  toggle() {
    this.MenuSidenav.toggle();
  }

}
