import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output()
  switchTo: EventEmitter<string>;

  constructor() {
    this.switchTo = new EventEmitter<string>();
  }

  switchPage(content: string) {
    this.switchTo.emit(content);
  }

  ngOnInit() {
    
  }

}
