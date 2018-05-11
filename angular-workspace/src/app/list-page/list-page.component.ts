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

  @Input();
  list: List;

  @Input()
  listId: string;

  collapsed = true;
  add = false;

  constructor(private activatedRoute: ActivatedRoute, private service: DataRetrieverService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
     this.listId = params['listId'];
     this.refresh();
    })
  }

  refresh() {
    this.service.getListWithId(this.listId).then((listItem: List) => {
      this.list = listItem;
    });
  }

  toggleAdd() {
    this.add = !this.add;
  }

  addItem(item: string) {
    this.list.contents.push({
      name: item,
      qty: 1
    });

    this.service.saveList(this.userEmail, this.list).then((result) => {
      console.log("it is saved my boi");
    });
  }
}
