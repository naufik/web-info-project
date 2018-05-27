import { Component, OnInit } from '@angular/core';
import { FridgeFood, DataRetrieverService } from '../dataretriever.service';
import * as Moment from 'moment';

@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.css'],
  providers: [ DataRetrieverService ]
})
export class FridgeComponent implements OnInit {

  fridgeService: DataRetrieverService;
  add = false;

  timeoutEvent = undefined;

  constructor(service: DataRetrieverService) {
    this.fridgeService = service;
  }

  data: FridgeFood[];

  userEmail: string = "john@john.com";

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.fridgeService.getUserData(this.userEmail).then((data: any) => {
      this.data = data.fridge;
    });
  }

  addNew(itemName: string) {
    let newDate = new Date();
    newDate.setDate(newDate.getDate() + 7);
    this.data.push({
      name: itemName,
      qty: 1,
      expiry: newDate
    });
    this.saveAll();
    this.toggleAdd();
  }

  saveAll(refresh = true) {
    this.fridgeService.saveFridge(this.userEmail, this.data).then(() => {
      if (refresh) {
        this.refresh();
      }
    });
  }

  toggleAdd() {
    this.add = !this.add;
  }

  onItemChanged() {
    if (this.timeoutEvent) {
      clearTimeout(this.timeoutEvent);
      this.timeoutEvent = undefined;
    }

    this.timeoutEvent = setTimeout(() => {
      this.saveAll(false); 
    }, 200);
  }

  sortFridge(compare: (a: FridgeFood, b: FridgeFood) => number, reverse=false) {
    this.data.sort(reverse ? (a, b) => compare(b, a) : compare);
  }

  compareByExpiry(a: FridgeFood, b: FridgeFood) {
    return Moment(a.expiry).diff(Moment(b.expiry), 'days');
  }

  compareByAlpha(a: FridgeFood, b: FridgeFood) {
    if (a.name > b.name) {
      return 1;
    } if (a.name === b.name) {
      return 0;
    } else {
      return -1;
    }
  }

  deleteItem(item: FridgeFood) {
    this.data = this.data.filter((thing) => {
      return thing._id !== item._id;
    });
    this.onItemChanged();
  }
}
