import { Component, OnInit } from '@angular/core';
import { GameCartService } from '../game-cart.service';
import { GameDataService } from '../game-data.service';
import { game } from './game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  games : game[] = [];

  constructor(
    private cart : GameCartService,
    private gamesDataService:GameDataService) { 
  }

  ngOnInit(): void {
    this.gamesDataService.getAll()
     .subscribe(games => this.games = games);
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