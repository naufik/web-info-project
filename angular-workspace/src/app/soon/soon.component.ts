import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'soon',
	templateUrl: './soon.component.html',
	styleUrls: ['./soon.component.css']
})
export class SoonComponent {

	constructor() { }

 	/** 
		@todo add your own data here, WebStorm will complain if the data is in the wrong format thank for TypeScript type-checking. 
	*/
	public members: { name: string, github?: string }[] = [
	{
		name: "Naufal Fikri Setiawan",
		github: "naufik"
	}];

	public getGithubLink(username: string) {
		return "http://github.com/" + username;
	}

}