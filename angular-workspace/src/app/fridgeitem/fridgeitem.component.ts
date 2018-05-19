import { Input, Output, Component, EventEmitter, OnInit } from '@angular/core';
import { FridgeFood } from '../dataretriever.service';

@Component({
  selector: 'app-fridgeitem',
  templateUrl: './fridgeitem.component.html',
  styleUrls: ['./fridgeitem.component.css']
})
export class FridgeitemComponent implements OnInit {

  @Input()
  itemsrc: FridgeFood;

  @Output()
  save: EventEmitter<null>;

  shownQty = "0";

  constructor() {
    this.save = new EventEmitter<null>();
  }

  ngOnInit() {
    this.shownQty = this.itemsrc.qty.toString();
  }

  collapsed = true;

  collapseItem() {
    this.collapsed = !this.collapsed;
  }

  getDisplayQty() {
    return this.itemsrc.qty.toString() + (this.itemsrc.unit ? " " + this.itemsrc.unit : "");
  }

  getDateDisplay() {
    return this.itemsrc.expiry.toString();
  }

  getExpiryDate() {

  }

  onChange(newStr: string) {
    this.itemsrc.qty = parseInt(this.shownQty);
    if (newStr.length > 0) {
      this.save.emit();
    }
  }
}
