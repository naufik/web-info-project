import { Component, OnInit } from '@angular/core';
import {DataRetrieverService, List, ListFood} from "../dataretriever.service";

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css'],
  providers: [ DataRetrieverService ]
})

export class ListPageComponent implements OnInit {

  list: List;
  collapsed = true;
  add = false;

  constructor(private service: DataRetrieverService) {}

  ngOnInit() {
    for (const i of this.service.getLists()) {
      if (i.name === "Tuna Sandwich") {
        this.list = i;
      }
    }
  }

  refresh() {
    this.list = this.list;
  }

  toggleAdd() {
    this.add = !this.add;
  }

  addItem(item: string) {
    this.list.contents.push({
      name: item,
      qty: 1
    });
    this.toggleAdd();
    this.refresh();
  }

}
