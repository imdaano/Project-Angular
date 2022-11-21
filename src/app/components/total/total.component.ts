import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent implements OnInit {

  @Input() total:number = 0; // aquí anteriormente teniamos total:number = 0 OJO;
  @Input() message:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
