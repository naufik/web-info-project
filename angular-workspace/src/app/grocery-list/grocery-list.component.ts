import { Component, OnInit, Input } from '@angular/core';
import { DataRetrieverService, List, FridgeFood, ListFood } from '../dataretriever.service';


@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css'],
  providers: [ DataRetrieverService ]
})
export class GroceryListComponent implements OnInit {

  @Input()
  userEmail: string = "john@john.com";

  checks = {};

  shoppingList = [];
  appendableLists: any[] = [];

  private service: DataRetrieverService;

  constructor(ds: DataRetrieverService) {
    this.service = ds;
  }

  ngOnInit() {
    this.refresh();
  }

  appendLists() {
    console.log(this.checks);
    let tempLists = this.appendableLists.filter(i => this.checks[i._id]);

    for (let currentList of tempLists) {
      for (let shopItem of currentList.contents) {
        if (!this.shoppingList.map(thing => thing.name).includes(shopItem.name)){
          this.shoppingList.push(shopItem);
        }
      }
    }

    this.service.saveGroceries(this.userEmail, this.shoppingList).then(() => {
      this.refresh();
    });
  }

  refresh() {
    this.service.getUserData(this.userEmail).then((data: { groceries: any[] }) => {
      this.shoppingList = data.groceries;
    });

    this.service.getListsForUser(this.userEmail).then((data: any[]) => {
      this.appendableLists = data;
      for (let item of this.appendableLists) {
        if (!this.checks[item._id]){
          this.checks[item._id] = false;
        }
      }
    });
  }

  toFridge() {
    this.service.getUserData(this.userEmail).then((data: { fridge: any[] }) => {
      return this.service.saveFridge(this.userEmail, 
        data.fridge.concat(this.shoppingList));
    }).then(() => {
      console.log("AYAYAYAYAYAY");
    })
  }

}
