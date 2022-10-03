import { Component, OnInit } from '@angular/core';
import { game } from './game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  games : game[] = [
    {
      name:"God of war 4",
      price: 2000,     
      console_types: "ps4", 
      stock: 10,
      image: "assets/img/godofwar.jpeg",
      clearence: true,
      quantity: 0,
    },
    {
      name:"Nier: Automata",
      price: 1000,     
      console_types: "ps4,Xbox one,Pc", 
      stock: 50,
      image: "assets/img/NierAutomata.jpeg",
      clearence: false,
      quantity: 0,
    },
    {
      name:"Minecraft",
      price: 700,     
      console_types: "ps4,Xbox one,Pc", 
      stock: 0,
      image: "assets/img/Minecraft.jpeg",
      clearence: false,
      quantity: 0,
    },
    {
      name:"Cyberpunk 2077",
      price: 2500,     
      console_types: "ps4,Xbox one,Pc", 
      stock: 0,
      image: "assets/img/Cyberpunk 2077.jpeg",
      clearence: false,
      quantity: 0,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
