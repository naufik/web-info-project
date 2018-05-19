import { Component, OnInit } from '@angular/core';
import { FridgeFood, DataRetrieverService } from '../dataretriever.service';

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

  saveAll() {
    this.fridgeService.saveFridge(this.userEmail, this.data).then(() => {
      this.refresh();
    });
  }

  toggleAdd() {
    this.add = !this.add;
  }

  onItemChanged() {
    console.log("save event added");
    if (this.timeoutEvent) {
      clearTimeout(this.timeoutEvent);
      this.timeoutEvent = undefined;
    }

    this.timeoutEvent = setTimeout(() => {
      this.saveAll(); 
    }, 200);
  }
}
