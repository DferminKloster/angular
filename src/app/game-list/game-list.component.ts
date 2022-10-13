import { Component, OnInit } from '@angular/core';
import { GameCartService } from '../game-cart.service';
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
      clearence: false,
      quantity: 0,
    },
    {
      name:"Nier: Automata",
      price: 1000,     
      console_types: "ps4,Xbox one,Pc", 
      stock: 50,
      image: "assets/img/NierAutomata.jpeg",
      clearence: true,
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
  ];

  constructor(private cart : GameCartService) { 
  }

  ngOnInit(): void {
  }

  addToCart(game: game) : void{
    this.cart.addToCart(game);
    game.stock -= game.quantity;
    game.quantity = 0;
  }

  limitReacher(m: string){
    alert(m);
  }

}




/*verifyBeerQuantity(beer : Beer): void {
  if(beer.stock < beer.quantity) {
    alert("No se pueden pedir más de las cervezas que hay en stock");
    beer.quantity = beer.stock;
  }*/