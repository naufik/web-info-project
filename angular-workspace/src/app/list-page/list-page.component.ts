import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {DataRetrieverService, List, ListFood} from "../dataretriever.service";

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css'],
  providers: [ DataRetrieverService ]
})

export class ListPageComponent implements OnInit {

  @Input()
  someList: List = {
    contents: [],
    name: "Loading...",
    url: "..."
  };

  @Input()
  userEmail: string = "john@john.com";

  @Input()
  listId: string;

  collapsed = true;
  add = false;

  constructor(private activatedRoute: ActivatedRoute, private service: DataRetrieverService) {}

  ngOnInit() {
    this.listId = "5af56ce214736e0014907a9e";
    console.log("hello gurl!~")
    this.refresh();
  }

  refresh() {
    this.service.getListWithId(this.listId).then((listItem: List) => {
      console.log("try");
      this.someList = listItem;
      console.log(this.someList);
    });
  }

  toggleAdd() {
    this.add = !this.add;
  }

  addItem(item: string) {
    this.someList.contents.push({
      name: item,
      qty: 1
    });

    this.service.saveList(this.userEmail, this.someList).then((result) => {
      console.log("it is saved my boi");
    });
  }
}
