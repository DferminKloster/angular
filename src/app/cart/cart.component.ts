import { Component, OnInit } from '@angular/core';
import { game } from '../game-list/game';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  total : number = 0;
  games : game[] = [
    {
      name:"God of war 4",
      price: 2000,     
      console_types: "ps4", 
      stock: 10,
      image: "assets/img/godofwar.jpeg",
      clearence: true,
      quantity: 4,
    },
    {
      name:"Nier: Automata",
      price: 1000,     
      console_types: "ps4,Xbox one,Pc", 
      stock: 50,
      image: "assets/img/NierAutomata.jpeg",
      clearence: false,
      quantity: 1,
    },
  ]
  constructor() { }

  ngOnInit(): void {
    this.games.forEach(game => {
      this.total += game.quantity * game.price
    });
  }

}
