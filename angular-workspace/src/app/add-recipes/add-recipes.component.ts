import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-recipe',
  templateUrl: './add-recipes.component.html',
  styleUrls: ['./add-recipes.component.css']
})
export class AddRecipesComponent implements OnInit {

  @Output()
  submit: EventEmitter<string>

  constructor() {
    this.submit = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  submitForm(name: string) {
    this.submit.emit(name);
  }

}
