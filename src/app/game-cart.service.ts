import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { game } from './game-list/game';

@Injectable({
  providedIn: 'root'
})
export class GameCartService {
  
  private _carList: game[] = [];

  cartlist : BehaviorSubject<game []> = new BehaviorSubject(this._carList);
  

  constructor() { }

  addToCart(game: game) {
    let item: game | undefined = this._carList.find((v1)=> v1.name == game.name);
    if(!item){
      this._carList.push({ ... game});
    }else{
      item.quantity += game.quantity;
    }
    console.log(this.cartlist);
    this.cartlist.next(this._carList);
  } 
}
