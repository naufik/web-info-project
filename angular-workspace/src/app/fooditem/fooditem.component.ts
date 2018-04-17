import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface FoodItem {
  imgSrc: string,
  name: string,
  expiry: Date
}

@Component({
  selector: 'food-item',
  templateUrl: './fooditem.component.html',
  styleUrls: ['./fooditem.component.css']
})
export class FooditemComponent implements OnInit {

  @Input()
  height: number = 300;
  @Input()
  width: number = 300;
  @Input()
  food: FoodItem;
  @Output()
  click: EventEmitter<FoodItem>;

  constructor() {
    this.click = new EventEmitter<FoodItem>();
  }

  onClick() {
    this.click.emit(this.food);
  }

  ngOnInit() {
  }

  daysToDue() {
    return (this.food.expiry.valueOf() - (new Date()).valueOf());
  }
}
