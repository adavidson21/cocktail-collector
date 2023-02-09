import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Drink, DrinkRoot } from 'src/app/models/drink';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  public drinks: DrinkRoot | undefined;

  constructor(private httpService: HttpService) {
    this.getDrinks();
  }

  /**
   * Gets the drinks.
   */
  async getDrinks() {
    const response = await this.httpService.getDrinks();

    response.subscribe((data) => {
      this.drinks = data as DrinkRoot;
    });
  }
}
