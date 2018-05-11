import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_LOGIN = "http://to-dd.herokuapp.com/api/login/"
const API_SIGNUP = "http://to-dd.herokuapp.com/api/user/"

export interface UserData {
  firstName: string,
  lastName: string,
  password: string,
  email: string,
  locationId: string
};

@Injectable()
export class AuthService {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  public login(email: string, passwd: string) {
    return new Promise((resolve, reject) => {
      this.http.post(API_LOGIN, {
        loginEmail: email,
        loginPassword: passwd
      }).subscribe((data: any) => { 
        if (data.success) {
          resolve(data.token);
        } else {
          reject(data.error);
        }
      });
    });
  }

  public signUp(data: UserData) {
    return new Promise((resolve, reject) => {
      this.http.post(API_SIGNUP, data).subscribe((data: any) => {
        if (data.success) {
          resolve(data.data);
        } else {
          if (data) {
            reject(new Error(data.error));
          } else {
            reject(new Error("Unknown error"));
          }
        }
      })
    })
  }
}
