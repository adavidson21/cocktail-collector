import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  /** Base URL (with test API key) */
  private baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/';

  constructor(private http: HttpClient) {}

  /**
   * Gets the ingredients.
   * @returns The list of ingredients.
   */
  getIngredients() {
    this.http.get(this.baseURL + 'list.php?i=list').subscribe((data) => {
      return Object.values(data);
    });
  }

  /**
   * Gets the glasses.
   * @returns The list of glasses.
   */
  getGlasses() {
    this.http.get(this.baseURL + 'list.php?g=list').subscribe((data) => {
      return Object.values(data);
    });
  }

  /**
   * Gets the categories.
   * @returns The list of categories.
   */
  getCategories() {
    this.http.get(this.baseURL + 'list.php?c=list').subscribe((data) => {
      return Object.values(data);
    });
  }

  /**
   * Gets the alcoholic filters.
   * @returns The alcoholic filters list.
   */
  getAlcoholicFilters() {
    this.http.get(this.baseURL + 'list.php?a=list').subscribe((data) => {
      return Object.values(data);
    });
  }
}