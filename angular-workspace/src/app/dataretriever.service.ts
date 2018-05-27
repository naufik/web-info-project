import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/** GET URL */
const API_URL = "http://to-dd.herokuapp.com/api/"

export interface List {
  _id?: any,
  name: string,
  url: string,
  contents: ListFood[]
}

export interface ListFood {
  _id?: any,
  name: string,
  qty: number,
  unit?: string, // Unit of measurement (pcs, grams, kgs, litres)
  expiry?: Date
}

export interface FridgeFood {
  _id?: any,
  name: string,
  qty: number,
  unit?: string, // Unit of measurement (pcs, grams, kgs, litres)
  expiry: Date
}

@Injectable()
export class DataRetrieverService {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  public getUserData(email: string) {
    return new Promise((resolve, reject) => {
      this.http.get(API_URL + "user/" + email).subscribe((data: any) => {
        if (data.success) {
          resolve(data.data);
        } else {
          reject(data.error);
        }
      });
    });
  }

  public getListWithId(listId: string) {
    return new Promise((resolve, reject) => {
      this.http.get(API_URL + "user/list/" + listId).subscribe((data: any) => {
        if (data.success) {
          resolve(data.data);
        } else {
          reject(data.error);
        }
      });
    });
  }

  public getListsForUser(userEmail: string) {
    return new Promise((resolve, reject) => {
      this.http.get(API_URL + "user/" + userEmail + "/lists").subscribe((data: any) => {
        if (data.success) {
          resolve(data.data);
        } else {
          if (data) {
            reject(data.error);
          } else {
            reject(new Error("Unknown Error"));
          }
        }
      });
    })
  }

  public saveUser(userData: any, userEmail: string) {
    return new Promise((resolve, reject) => {
      this.http.post(API_URL, {
        email: userEmail,
        data: userData
      }).subscribe((data: any) => {
        if (data.success) {
          resolve(data.data);
        } else {
          reject(data.err);
        }
      });
    });
  }

  public newList(userEmail: string, data: any) {
    return new Promise((resolve, reject) => {
      this.http.post(API_URL + "user/add.list/", {
        userEmail: userEmail,
        listData: data
      }).subscribe((data: any) => {
        if (data.success) {
          resolve(data.data);
        } else {
          reject(data.err);
        }
      });
    });
  }

  public saveList(userEmail: string, data: any) {
    return new Promise((resolve, reject) => {
      this.http.post(API_URL + "user/list/", {
        userEmail: userEmail,
        listData: data
      }).subscribe((data: any) => {
        if (data.success) {
          resolve(data.data);
        } else {
          if (data) {
            reject(data.err);
          } else {
            reject(new Error("Unknown error"));
          }
        }
      })
    });
  }

  public saveFridge(userEmail: string, contents: any[]) {
    return new Promise((resolve, reject) => {
      this.http.post(API_URL + "user/" + userEmail + "/fridge", {
        contents: contents
      }).subscribe((data: any) => {
        if (data.success) {
          resolve(data);
        } else {
          if (data) {
            reject(data.error);
          } else {
            reject(new Error("Unknown Error"));
          }
        }
      });
    })
  }

  public saveGroceries(userEmail: string, contents: any[]) {
    return new Promise((resolve, reject) => {
      this.http.post(API_URL + "user/" + userEmail + "/groceries", {
        contents: contents
      }).subscribe((data: any) => {
        if (data.success) {
          resolve(data);
        } else {
          if (data) {
            reject(data.error);
          } else {
            reject(new Error("Unknown Error"));
          }
        }
      });
    })
  }

  public getSessionData() {
    return new Promise((resolve, reject) => {
      this.http.get(API_URL + "user/session").subscribe((data) => {
        if (data) {
          resolve(data)
        } else {
          reject(new Error("Unknown Error"))
        }
      })
    })
  }
}
