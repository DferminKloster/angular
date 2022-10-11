import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { game } from '../game-list/game';


@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {

  constructor() { }

  @Input()
  quantity!: number;

  @Input()
  max!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  limit:EventEmitter<string> = new EventEmitter<string>();
  
  ngOnInit(): void {
  }

  upQuantity(): void{
    if (this.quantity < this.max) {
      this.quantity++; 
      this.quantityChange.emit(this.quantity);
    }else{
      this.limit.emit("se alcanzo el maximo");
    }
  }
  downQuantity(): void{
    if (this.quantity > 0) {
      this.quantity--; 
      this.quantityChange.emit(this.quantity);
    }
  }


}
