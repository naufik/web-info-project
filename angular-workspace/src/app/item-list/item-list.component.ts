import { Component, OnInit } from '@angular/core';


interface FoodItem {
  imgSrc?: string,
  name: string,
  expiry: Date
}

@Component({
  selector: 'food-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  foodlist: FoodItem[] = [
    {
      imgSrc: "http://lorempixel.com/240/120/",
      name: "Koala",
      expiry: new Date()
    },
    {
      imgSrc: "http://lorempixel.com/240/120/",
      name: "Panda",
      expiry: new Date()
    },
    {
      imgSrc: "http://lorempixel.com/240/120/",
      name: "Retardasi Mental",
      expiry: new Date()
    },
  ]
}
