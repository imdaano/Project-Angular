import { ItemService } from './../../services/item.service';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items:Item[] = [];
  total:number = 0;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    // this.items = [];
    // this.items = this.itemService.getItems();
    this.itemService.getItems().subscribe(data => {
    this.items = data;
    this.getTotal();  // cuando termina la operación, se actualiza de nuevo
  })

    
  }
  
  deleteItem (item:Item){     // borrar items
    this.items = this.items.filter(x => x.id !== item.id);
    this.itemService.deleteItem(item).subscribe();
    this.getTotal();
  }

  toggleItem(item: Item){   // modificar items
    this.itemService.toggleItem(item).subscribe();
    this.getTotal();
  }

  getTotal() {      // total de items
    this.total = this.items
                .filter ( item=> !item.completed)
                .map(item => item.quantity * item.price)
                .reduce ( (acc, item) => acc += item, 0);
  }
}
