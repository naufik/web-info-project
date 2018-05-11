import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/** GET URL */
const API_URL = "http://to-dd.herokuapp.com/api/"

/** placeholder hardcoded data */
const allLists: List[] = [
{
  name: "Tuna Sandwich",
  url: "tuna",
  contents: [{
    name: "Tuna",
    qty: 2.5,
    unit: "kg+s"
  },
  {
    name: "Bread",
    qty: 2
  },
  {
    name: "Tomatoes",
    qty: 0.5,
    unit: "g+s"
  },
  {
    name: "Cheese",
    qty: 2,
    unit: "slice+s"
  },
  {
    name: "Lettuce",
    qty: 3,
    unit: "slice+s"
  }]
},
{
  name: "Kids Favorites",
  url: "kids-favs",
  contents: [{
    name: "Sausages",
    qty: 3,
    unit: "kg+s"
  },
  {
    name: "Beans",
    qty: 5,
    unit: "can+s"
  },
  {
    name: "Cereal",
    qty: 2,
    unit: "package+s"
  },
  {
    name: "Milk",
    qty: 1,
    unit: "carton+s"
  },
  {
    name: "Broccoli",
    qty: 20,
    unit: "slice+s"
  }]
}, {
  name: "Not for the Kids",
  url: "alcohol",
  contents: [{
    name: "Wine",
    qty: 2,
    unit: "bottle+s"
  }, {
    name: "Whisky",
    qty: 1,
    unit: "bottle+s"
  }]
}
]

const allFridge: FridgeFood[] = [
{
  name: "Milk",
  qty: 3,
  expiry: new Date(new Date().setDate((new Date().getDate()) + 4))
},
{
  name: "Snappers",
  qty: 2,
  expiry: new Date(new Date().setDate((new Date().getDate()) + 3))
},
{
  name: "Beef",
  qty: 1,
  unit: "kg+s",
  expiry: new Date(new Date().setDate((new Date().getDate()) + 7))
},
{
  name: "Eggs",
  qty: 5,
  unit: "pc+s",
  expiry: new Date(new Date().setDate((new Date().getDate()) + 1))
}
]

export interface List {
  name: string,
  url: string,
  contents: ListFood[]
}

export interface ListFood {
  name: string,
  qty: number,
  unit?: string, // Unit of measurement (pcs, grams, kgs, litres)
  expiry?: Date
}

export interface FridgeFood {
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

  public getLists() {
    return allLists;
  }

  public getFridge() {
    return allFridge;
  }

  public addData(data: FridgeFood) {
    allFridge.push(data);
  }

  public addNewList(data: List) {
    allLists.push(data);
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

  public saveList(listData: any, listId: string) {
    // stub;
  }
}
