import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  private router: Router;
  private route: ActivatedRoute;

  constructor(router: Router, route: ActivatedRoute) {
    this.router = router;
    this.route = route;
    this.testvar = "AAAA";
  }
  testvar: string;
  ngOnInit() {

  }

  navigateLogin() {
    this.testvar += "A";
    this.router.navigate(['/main']);
  }

}
