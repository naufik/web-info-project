import { Component, OnInit } from '@angular/core';
import { DataRetrieverService } from '../dataretriever.service';

@Component({
  selector: 'app-logged-header',
  templateUrl: './logged-header.component.html',
  styleUrls: ['./logged-header.component.css'],

})
export class LoggedHeaderComponent implements OnInit {

  private dataRetriever: DataRetrieverService;
  private user: any;

  constructor(ds: DataRetrieverService) {
    this.dataRetriever = ds;
  }

  ngOnInit() {
    this.dataRetriever.getSessionData().then((data) => {
      this.user = data;
    });
  }

}
