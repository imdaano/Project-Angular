import { Item } from './../models/item';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  url:string = 'http://localhost:3001/items'
 /*  httpOptions = {
    Headers: {
      'Content-Type': 'application/json'
    }
  }; */
  items: Item [] = [
    {
      id: 0,
      title: 'Pan',
      price: 0.54,
      quantity: 1,
      completed: false
    },
    {
      id: 1,
      title: 'Garbanzos',
      price: 8,
      quantity: 2,
      completed: true
    },
    {
      id: 2,
      title: 'Chaqueta del Pull',
      price: 39.99,
      quantity: 1,
      completed: false
    }
  ];

  constructor(private http:HttpClient) { }
  
  getItems():Observable <Item[]>{
    // return this.items;
    return this.http.get<Item[]>(this.url)
  }

  addItem(item:Item):Observable<Item>{
    //this.items.unshift(item);
    return this.http.post<Item>(this.url, item);
  }

  toggleItem(item:Item):Observable<Item>{
    return this.http.put<Item>(this.url + item.id, item);
  }

  deleteItem(item:Item):Observable<Item>{
    return this.http.delete<Item>(this.url + item.id);
  }
}
