import { Item } from './../../models/item';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: Item = new Item();
  @Output() deleteItem: EventEmitter<Item>= new EventEmitter ();
  @Output() toggleItem: EventEmitter<Item>= new EventEmitter ();

  constructor() { }

  ngOnInit(): void {

  }
  onDelete(item: Item){
     this.deleteItem.emit(item);
  }

  onToggle(item: Item) {
    item.completed = !item.completed;
    this.toggleItem.emit(item);
  }

}
