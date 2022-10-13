import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { FormulariocartComponent } from './formulariocart/formulariocart.component';
import { VideojuegoGamesComponent } from './videojuego-games/videojuego-games.component';
import { VideojuegosAboutComponent } from './videojuegos-about/videojuegos-about.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'games',
    pathMatch:'full'
  },
  {
    path: 'games',
    component:VideojuegoGamesComponent
  },
  {
    path: 'about',
    component:VideojuegosAboutComponent
  },
  {
    path: 'forms',
    component:FormulariocartComponent
  },
  {
    path: 'cart',
    component:CartComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
