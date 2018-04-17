import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signupmode: boolean;

  @Output()
  login: EventEmitter<any>;

  @Output()
  signup: EventEmitter<any>;

  constructor() {
    this.login = new EventEmitter<any>();
    this.signup = new EventEmitter<any>();
    this.signupmode = false;
  }

  ngOnInit() {
  }

  goLogin(email: string, password: string) {
    if (this.signupmode) {
      this.signupmode = false
    } else {      
      this.login.emit({
        email: email,
        password: password
      });
    }
  }

  goSignup() {
    // this.signup.emit(null);
    if (!this.signupmode) {
      this.signupmode = true;
    } else {
      this.signup.emit(null)
    }
  }

}
