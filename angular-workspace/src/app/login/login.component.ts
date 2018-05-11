import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService, UserData } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ AuthService ]
})
export class LoginComponent implements OnInit {
  message = "Log in here.";
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

  switchSignup() {
    this.signupmode = true;
  }

  formData = {
    firstName: "",
    lastName: "",
    email: "",
    passwd: "",
    confPasswd: "",
    location: ""
  }

  goSignup() {
    if (this.formData.passwd === this.formData.confPasswd) {
      
      let newUser: UserData = {
        firstName: this.formData.firstName,
        lastName: this.formData.lastName,
        email: this.formData.email,
        password: this.formData.passwd,
        locationId: this.formData.location
      }

      this.auth.signUp(newUser).then((result: any) => {
        this.signup.emit({
          success: true,
          user: result
        });
        this.message = "Sign up successful for user " + result.email;
      }, (error) => {
        this.message = error;
      });
    } else {
      this.message = "Password does not match";
    }
  }

}
