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
    this.data.push({
      name: itemName,
      qty: 1,
      expiry: new Date()
    });
    this.fridgeService.saveFridge(this.userEmail, this.data).then(() => {
      this.refresh();  
    });

    this.toggleAdd();
  }

  toggleAdd() {
    this.add = !this.add;
  }
}
