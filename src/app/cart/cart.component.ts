import { Component, OnInit } from '@angular/core';
import { game } from '../game-list/game';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  games : game[] = [
    {
      name:"God of war 4",
      price: 2000,     
      console_types: "ps4", 
      stock: 10,
      image: "assets/img/godofwar.jpeg",
      clearence: true,
      quantity: 1,
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
    
  }

  total(){
    let sum=0;
    this.games.forEach(game =>{
      sum+= game.quantity * game.price
    });
    return sum;
  }

}
