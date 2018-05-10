import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = "http://localhost:3000/api/auth/"

@Injectable()
export class AuthService {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  public login(email: string, passwd: string) {
    return new Promise((resolve, reject) => {
      this.http.post(API_URL, {
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

}
