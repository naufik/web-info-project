import { Component, OnInit, Input, Output } from '@angular/core';
import { DataRetrieverService, List } from '../dataretriever.service';


@Component({
  selector: 'list-appender',
  templateUrl: './list-appender.component.html',
  styleUrls: ['./list-appender.component.css']
})
export class ListAppenderComponent implements OnInit {
  
  private service: DataRetrieverService;

  constructor(ds: DataRetrieverService) {
    this.service = ds;
  }

  ngOnInit() {
  }


}
