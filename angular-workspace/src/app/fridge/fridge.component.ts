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

  addNew() {
    this.fridgeService.addData({
      name: "Mangos",
      qty: 300,
      unit: "kg+s",
      expiry: new Date()
    });

    this.refresh();
  }

}
