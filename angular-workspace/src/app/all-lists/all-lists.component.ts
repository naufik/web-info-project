import { Component, OnInit } from '@angular/core';
import { DataRetrieverService, List } from '../dataretriever.service';

@Component({
  selector: 'app-all-lists',
  templateUrl: './all-lists.component.html',
  styleUrls: ['./all-lists.component.css'],
  providers: [ DataRetrieverService ]
})
export class AllListsComponent implements OnInit {

  allLists: List[];
  add = false;

  private service: DataRetrieverService;

  constructor(ds: DataRetrieverService) {
    this.service = ds;
  }

  ngOnInit() {
    this.allLists = this.service.getLists();
  }

  refresh() {
    this.allLists = this.service.getLists();
  }

  addToLists(listName: string) {
    this.service.addNewList({
      name: listName,
      url: listName.toLowerCase(),
      contents: []
    });
    this.refresh();
    this.toggleAdd();
  }

  toggleAdd() {
    this.add = !this.add;
  }
}
