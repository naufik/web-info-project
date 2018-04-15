import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output()
  submit: EventEmitter<any>;

  constructor() {
    this.submit = new EventEmitter<any>();
  }

  ngOnInit() {
  }

  login(username: string) {
    this.submit.emit(username);
  }

}