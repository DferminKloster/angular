import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameListComponent } from './game-list/game-list.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { VideojuegoGamesComponent } from './videojuego-games/videojuego-games.component';
import { VideojuegosAboutComponent } from './videojuegos-about/videojuegos-about.component';
import { InputNumberComponent } from './input-number/input-number.component';

import {HttpClientModule} from '@angular/common/http'
import { FormulariocartComponent } from './formulariocart/formulariocart.component';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    CartComponent,
    VideojuegoGamesComponent,
    VideojuegosAboutComponent,
    InputNumberComponent,
    FormulariocartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
