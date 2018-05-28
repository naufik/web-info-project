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
  list: List = {
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

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private service: DataRetrieverService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.listId = params['listid'];
      this.refresh();
    });
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

    });
    this.toggleAdd();
  }

  deleteList(item: any) {
    this.list.contents = this.list.contents.filter((thing) => 
      thing._id !== item._id
    );

    this.service.saveList(this.userEmail, this.list).then((result) => {
      this.refresh();
    });
  }

  groceries() {
    this.service.getSessionData().then((data: {data: { email: string, groceries: any[] }}) => {
      let user = data.data;
      let newList = user.groceries.concat(this.list);
      this.service.saveGroceries(user.email, newList).then((stuff) => {
        this.router.navigate(['/groceries']);
      });
    })
  }
}
