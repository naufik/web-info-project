import { Component, OnInit } from '@angular/core';

interface UserData {
	name: string,
	github?: string
};

@Component({
	selector: 'soon',
	templateUrl: './soon.component.html',
	styleUrls: ['./soon.component.css']
})
export class SoonComponent implements OnInit {

  ngOnInit(): void {
    this.randomize();
    setInterval(() => {this.randomize()}, 4000)
  }

  constructor() { }

	displayMembers = false;

	taglineIndex = 0;
	taglines: string[] = [
	  "Revolutionizing the grocery shopping experience",
    "The future of groceries... coming soon",
    "Groceries, made easy. Soon!",
    "We're still cooking, please wait.",
    "Helping your grocery experience, later tho.",
    "Your local grocery helper. Coming to your neighborhood soon!"
  ]
	color = "blue";

 	/**
		@todo add your own data here, WebStorm will complain if the data is in the wrong format thank to TypeScript type-checking.
	*/
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

	/**
		Method to obtain the github link of a given username.

		@param username the username of the user.
	*/
 	public getGithubLink (username: string): string {
		return "http://github.com/" + username;
	}

	randomize() {
 	  this.taglineIndex = Math.floor(Math.random() * (this.taglines.length - 0.01));
  }
}
