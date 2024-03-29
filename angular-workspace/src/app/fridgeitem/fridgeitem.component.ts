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

  @Output()
  delete: EventEmitter<FridgeFood>;

  shownQty: string = "0";
  dateString: string;
  daysLeft: string;

  constructor() {
    this.save = new EventEmitter<null>();
    this.delete = new EventEmitter<FridgeFood>();
  }

  ngOnInit() {
    this.shownQty = this.itemsrc.qty.toString();
    this.dateString = this.getDateDisplay();
    this.daysLeft = this.getDaysLeft().toString();
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

  onChange(newStr: string) {
    this.itemsrc.qty = parseInt(this.shownQty);
    try {
      let date = Moment(this.dateString, "DD/MM/YYYY");
      date.set('hour', 0);
      date.set('minute', 0);
      this.itemsrc.expiry = date.toDate();
      this.daysLeft = this.getDaysLeft().toString();
    } catch {
      console.log("smth went wrong my friend");
    }

    if (newStr.length > 0) {
      this.save.emit();
    }
  }

  getDaysLeft() {
    return Moment(this.itemsrc.expiry).diff(Moment(), 'days');
  }

  setDate(daysLeft: string) {
    this.itemsrc.expiry = Moment().add(parseInt(daysLeft), 'days').toDate();
    this.dateString = this.getDateDisplay();
    this.save.emit();
  }

  deleteItem() {
    this.delete.emit(this.itemsrc);
  }  
}
