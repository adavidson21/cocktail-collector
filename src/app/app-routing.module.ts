import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkDeckComponent } from './modules/drink-deck/drink-deck.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  { path: 'drinkdeck', component: DrinkDeckComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
