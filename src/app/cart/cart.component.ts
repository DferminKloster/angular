import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { GameCartService } from '../game-cart.service';
import { game } from '../game-list/game';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  games: game [] = [];

  cartlist$: Observable<game[]>;
  constructor(private cart : GameCartService) { 
    this.cartlist$ = cart.cartlist.asObservable();
  }

  ngOnInit(): void {
  }



}
