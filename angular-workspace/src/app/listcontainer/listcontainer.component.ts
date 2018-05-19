import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import * as Moment from 'moment';

@Component({
  selector: 'app-listcontainer',
  templateUrl: './listcontainer.component.html',
  styleUrls: ['./listcontainer.component.css'],
  })
export class ListcontainerComponent implements OnInit {

  private router: Router;

  @Input()
  title = "";

  @Input()
  destination = "";
  
  @Input()
  datasource = [];

  lists = []

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit() {

  }

  navigate() {
    this.router.navigate(["/" + this.destination]);
  }

  getUrl(item: any) {
    // items do not have url
    if (!item.qty) {
      return "/lists/" + item._id;
    } else {
      return "/fridge";
    }
  }

  getPostAnnotation(item: any) {
    if (!item.qty) {
      return undefined;
    } else {
      return Moment(item.expiry).diff(Moment(), 'days').toString() + " days";
    }
  }
}
