import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listcontainer',
  templateUrl: './listcontainer.component.html',
  styleUrls: ['./listcontainer.component.css']
})
export class ListcontainerComponent implements OnInit {

  private router: Router;

  @Input()
  title = "";

  @Input()
  destination = "";
  
  lists = [
    "My Groceries",
    "Hangover Cure",
    "Cheetos Alternatives",
    "Wine"
  ]

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit() {
  }

  navigate() {
    this.router.navigate(["/" + this.destination]);
  }
}
