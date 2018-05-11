import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';

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
    if (this.datasource.length > 0) {
      this.lists = this.datasource;
    }
  
  }

  navigate() {
    this.router.navigate(["/" + this.destination]);
  }
}
