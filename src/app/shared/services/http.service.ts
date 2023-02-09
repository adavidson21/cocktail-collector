import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  /** Base URL */
  private baseURL = environment.COCKTAIL_API_BASEURL;

  constructor(private http: HttpClient) {
    console.log('base', this.baseURL);
  }

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

  /**
   * Gets the recipes.
   * @returns The recipes.
   */
  async getDrinks() {
    // TODO: Use random endpoint once patreon supporter. Temporarily use search by name for development.
    return await this.http.get(this.baseURL + 'search.php?s=margarita');
  }
}
