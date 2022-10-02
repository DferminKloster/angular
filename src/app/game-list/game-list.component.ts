import { Component, OnInit } from '@angular/core';
import { game } from './game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  game : game = {
    "name":"God of war 4",
    "price": 2000,     
    "console_types": "ps4", 
    "stock": 10,
    "image": "assets/img/godofwar.jpeg"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
