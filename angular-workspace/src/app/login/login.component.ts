import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService, UserData } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})
export class LoginComponent implements OnInit {

  signupmode: boolean;

  @Output()
  login: EventEmitter<any>;

  @Output()
  signup: EventEmitter<any>;

  private auth: AuthService;

  constructor(service: AuthService) {
    this.login = new EventEmitter<any>();
    this.signup = new EventEmitter<any>();
    this.signupmode = false;

    this.auth = service;
  }

  ngOnInit() {
  }

  goLogin(email: string, password: string) {
    if (this.signupmode) {
      this.signupmode = false;
    } else {      
      this.login.emit({
        email: email,
        password: password
      });
    }
  }

  goSignup(firstName: string, lastName: string, email: string, passwd: string, confPasswd: string, location: string) {
    if (passwd === confPasswd) {

      let newUser: UserData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: passwd,
        locationId: location
      }

      this.auth.signUp(newUser).then((result) => {
        this.signup.emit({
          success: true,
          user: result
        });
      }, (error) => {
        
      });
    } else {

    }

}
