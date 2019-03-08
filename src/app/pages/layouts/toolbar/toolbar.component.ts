import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() toggle = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  togglebtn() {
    this.toggle.emit();
  }

}
