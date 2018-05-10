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

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.data = this.fridgeService.getFridge();
  }

  addNew(itemName: string) {
    this.fridgeService.addData({
      name: itemName,
      qty: 300,
      unit: "kg+s",
      expiry: new Date()
    });
    this.refresh();
    this.toggleAdd();
  }

  toggleAdd() {
    this.add = !this.add;
  }
}
