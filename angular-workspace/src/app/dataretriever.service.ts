import { Injectable } from '@angular/core';

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
export class DataretrieverService {

  /** placeholder hardcoded data */
  public allLists: List[] = [
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

      }]
    }
  ]

  constructor() {

  }

}
