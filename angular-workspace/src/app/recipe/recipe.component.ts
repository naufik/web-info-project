import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { DataRetrieverService, List } from '../dataretriever.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  @Input()
  data: List;
  
  @Output()
  delete: EventEmitter<List>;

  constructor() {
    this.delete = new EventEmitter<List>();
  }

  ngOnInit() {

  }

  getDisplayedContents() {
    let contents: string = "Includes ";

    if (this.data.contents.length == 0) {
      return "";
    }

    for (let i = 0; i < 3; ++i) {
      if (this.data.contents.length <= i) {
        contents += ".";
        break;
      }
      if (i > 0) {
        contents += ", ";
      }
      contents += this.data.contents[i].name + (i === 2 ? "." : "");
    }
    return contents;

  }

  deleteList() {
    this.delete.emit(this.data);
  }

}
