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
  destination: string;

  constructor(router: Router) { 
    this.router = router;
  }

  ngOnInit() {
  }

  navigate() {
    this.router.navigate(["/" + this.destination]);
  }

}
