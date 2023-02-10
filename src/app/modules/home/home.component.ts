import { HttpErrorResponse } from '@angular/common/http';
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
  /** The drinks. */
  public drinks: DrinkRoot | undefined;

  /** The drinks that should be displayed. */
  displayedDrinks: any;

  /** The count of the drinks. */
  dataCount: number;

  /** The number of cards to be displayed at once. */
  private numberOfCards: number = 4;

  constructor(private httpService: HttpService) {
    this.dataCount = 0;
  }

  ngOnInit() {
    this.httpService.getDrinks().subscribe(
      (data) => {
        this.drinks = data as DrinkRoot;
        this.setDisplayedDrinks();
      },
      (err: HttpErrorResponse) => {
        console.log('Error parsing data: ' + err.message);
      }
    );
  }

  /**
   * Sets the drinks to be displayed.
   */
  setDisplayedDrinks() {
    if (this.drinks) {
      this.displayedDrinks = this.drinks.drinks.slice(
        this.dataCount * this.numberOfCards,
        (this.dataCount + 1) * this.numberOfCards
      );
    }
  }

  /**
   * Displays the drinks from the previous page.
   */
  previous() {
    if (this.dataCount != 0) {
      this.dataCount = this.dataCount - 1;
      this.setDisplayedDrinks();
    }
  }

  /**
   * Displays the next set of drinks.
   */
  next() {
    if (
      this.drinks &&
      (this.dataCount + 1) * this.numberOfCards < this.drinks.drinks.length
    ) {
      this.dataCount = this.dataCount + 1;
      this.setDisplayedDrinks();
    }
  }
}
