import { Component, OnInit, Input } from '@angular/core';
import { DataRetrieverService, List } from '../dataretriever.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  @Input()
  listdata: List;

  constructor() { }

  ngOnInit() {
  
  }

}
