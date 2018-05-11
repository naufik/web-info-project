import { Component, OnInit } from '@angular/core';
import { DataRetrieverService, List } from '../dataretriever.service';
import { AuthService, ListData} from '../auth.service';
// import {ListData} from "../auth.service";

@Component({
  selector: 'app-all-lists',
  templateUrl: './all-lists.component.html',
  styleUrls: ['./all-lists.component.css'],
  providers: [ AuthService, DataRetrieverService ]
})

export class AllListsComponent implements OnInit {
  email: string = "john@john.com"

  allLists: List[];
  add = false;

  formData = {
    name: "",
    url: "",
    contents: []
  }

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

  // addToLists(listName: string) {
  //   this.service.addNewList({
  //     name: listName,
  //     url: listName.toLowerCase(),
  //     contents: []
  //   });
  //   this.refresh();
  //   this.toggleAdd();
  // }

  toggleAdd() {
    this.add = !this.add;
  }

  addList(name: string) {
    let newList: List = {
      name: name,
      url: name.replace(" ", "-").toLowerCase(),
      contents: []
    }

    this.service.newList(this.email, newList).then((result: any) =>{
      console.log("test works");
    });
    this.getLists();
    this.toggleAdd();
  }

  getLists(){
    this.service.getUserData(this.email).then((result: any) =>{
      console.log(result);
      return Promise.all(result.lists.map(x => this.service.getListWithId(x)));
    }).then((listOfLists: any) => {
      this.allLists = listOfLists;
    });
  }
}
