import { Component, OnInit } from '@angular/core';
import { DataRetrieverService } from '../dataretriever.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
  providers: [ DataRetrieverService ]
})
export class MainpageComponent implements OnInit {

  private dataretriver: DataRetrieverService;
  
  constructor(dr: DataRetrieverService) { 
    this.dataretriver = dr;
  }

  fridge = [];

  lists = [];

  ngOnInit() {
    this.fridge = this.dataretriver.getFridge();
    this.lists = this.dataretriver.getLists();
  }

}
