import { Component, OnInit } from '@angular/core';
import { DataRetrieverService, List, FridgeFood, ListFood } from '../dataretriever.service';


@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css'],
  providers: [ DataRetrieverService ]
})
export class GroceryListComponent implements OnInit {

  checks = {};

  shoppingList = ["Raw Salmon", "Chicken Breast", "Full-Cream Milk", "Coffee Ground", "Wholegrain Bread"];
  appendableLists: List[] = [];

  private service: DataRetrieverService;

  constructor(ds: DataRetrieverService) {
    this.service = ds;
  }

  ngOnInit() {
    this.appendableLists = this.service.getLists();
    for (let item of this.appendableLists) {
      this.checks[item.name] = false;
    }
  }

  appendLists() {
    let tempLists = this.appendableLists.filter(i => this.checks[i.name]);
    for (let currentList of tempLists) {
      for (let shopItem of currentList.contents) {
        if (!this.shoppingList.includes(shopItem.name)){
          this.shoppingList.push(shopItem.name);
        }
      }
    }
  }

}
