import { Input, Output, Component, EventEmitter, OnInit } from '@angular/core';
import { FridgeFood } from '../dataretriever.service';
import * as Moment from 'moment';

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

  shownQty: string = "0";
  dateString: string;

  constructor() {
    this.save = new EventEmitter<null>();
  }

  ngOnInit() {
    this.shownQty = this.itemsrc.qty.toString();
    this.dateString = this.getDateDisplay();
  }

  collapsed = true;

  collapseItem() {
    this.collapsed = !this.collapsed;
  }

  getDisplayQty() {
    return this.itemsrc.qty.toString() + (this.itemsrc.unit ? " " + this.itemsrc.unit : "");
  }

  getDateDisplay() {
    return Moment(this.itemsrc.expiry).format("DD/MM/YYYY");
  }

  getExpiryDate() {

  }

  onChange(newStr: string) {
    this.itemsrc.qty = parseInt(this.shownQty);
    try {
      let date = Moment(this.dateString, "DD/MM/YYYY");
      date.set('hour', 0);
      date.set('minute', 0);
      this.itemsrc.expiry = date.toDate();
    } catch {
      // on parsing error do nothing
    }

    if (newStr.length > 0) {
      this.save.emit();
    }
  }
}
