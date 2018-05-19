import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.css']
})
export class ListitemComponent implements OnInit {
  private router: Router;

  @Input()
  listname: string;

  @Input()
  postAnnotation: string;

  @Input()
  destination: string;

  constructor(router: Router) { 
    this.router = router;
  }

  ngOnInit() {

  }

  navigate() {
    if (this.destination) {
      this.router.navigate(["/" + this.destination]);
    }
  }

  getDisplayText() {
    let display = this.listname;
    if (this.postAnnotation) {
      display += " (" + this.postAnnotation + ")";
    }
    return display;
  }
}
