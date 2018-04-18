import { Component, OnInit } from '@angular/core';
import { DataRetrieverService, List, FridgeFood, ListFood } from '../dataretriever.service';


@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css'],
  providers: [ DataRetrieverService ]
})
export class GroceryListComponent implements OnInit {

  shoppingList = ["Raw Salmon", "Chicken Breast", "Full-Cream Milk", "Coffee Ground", "Wholegrain Bread"];
  appendableLists: List[] = [];

  private service: DataRetrieverService;

  constructor(ds: DataRetrieverService) {
    this.service = ds;
  }

  ngOnInit() {
    this.appendableLists = this.service.getLists();
  }

  appendList() {
    
  }

}
