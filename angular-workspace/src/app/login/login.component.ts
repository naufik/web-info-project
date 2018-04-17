import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output()
  login: EventEmitter<any>;

  @Output()
  signup: EventEmitter<any>;

  constructor() {
    this.login = new EventEmitter<any>();
    this.signup = new EventEmitter<any>();
  }

  ngOnInit() {
  }

  goLogin(email: string, password: string) {
    this.login.emit({
      email: email,
      password: password
    });
  }

  goSignup() {
    this.signup.emit(null);
  }

}
