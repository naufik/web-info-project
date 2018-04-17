import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listcontainer',
  templateUrl: './listcontainer.component.html',
  styleUrls: ['./listcontainer.component.css']
})
export class ListcontainerComponent implements OnInit {

  title = ""

  lists = [
    "My Groceries",
    "Hangover Cure",
    "Cheetos Alternatives",
    "Wine"
  ]

  constructor() { }

  ngOnInit() {
  }

}
