import { Input, Component, OnInit } from '@angular/core';
import { FridgeFood } from '../dataretriever.service';

@Component({
  selector: 'app-fridgeitem',
  templateUrl: './fridgeitem.component.html',
  styleUrls: ['./fridgeitem.component.css']
})
export class FridgeitemComponent implements OnInit {

  @Input()
  itemsrc: FridgeFood;

  constructor() {

  }

  ngOnInit() {
  }

  collapsed = true;

  collapseItem() {
    this.collapsed = !this.collapsed;
  }

  getDisplayQty() {
    return this.itemsrc.qty.toString() + " " + this.itemsrc.unit;
  }

  getDateDisplay() {
    console.log(this.itemsrc.expiry.toISOString());
    return this.itemsrc.expiry.toISOString();
  }
}
