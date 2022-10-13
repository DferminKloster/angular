import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { game } from './game-list/game';

const URL = 'https://63482ac70484786c6e93abee.mockapi.io/api/v1/games'

@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<game[]> {

    return this.http.get<game[]>(URL)
              .pipe(
                tap( (games: game[]) => games.forEach(games=>games.quantity=0))
              );
  }
}
