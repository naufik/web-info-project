import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router'

interface UserData {
  name: string,
  github?: string
}

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

  collapsearr = [true, true];

  collapse(menu: number){
    this.collapsearr[menu] = !this.collapsearr[menu];
  }

  public getGithubLink (username: string): string {
    return "http://github.com/" + username;
  }
  public members: UserData[] = [
    {
      name: "Naufal Fikri Setiawan",
      github: "naufik"
    },
    {
      name: "Farhan Darma",
      github: "fdarma"
    },
    {
      name: "Manindra Arora",
      github: "maniarora"
    }
  ];

}
