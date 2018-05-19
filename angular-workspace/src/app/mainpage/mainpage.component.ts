import { Component, OnInit, Input } from '@angular/core';
import { DataRetrieverService } from '../dataretriever.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
  providers: [ DataRetrieverService ]
})
export class MainpageComponent implements OnInit {

  @Input()
  email: string = "john@john.com";

  private dataretriver: DataRetrieverService;
  
  constructor(dr: DataRetrieverService) { 
    this.dataretriver = dr;
  }

  fridge = [];

  lists = [];

  ngOnInit() {
    this.dataretriver.getListsForUser(this.email).then((data: any) => {
      this.lists = data;
    });

    this.dataretriver.getUserData(this.email).then((data: any) => {
      this.fridge = data.fridge;
    });
  }

}
