import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  /** Base URL */
  private baseURL = environment.COCKTAIL_API_BASEURL;

  constructor(private http: HttpClient) {}

  /**
   * Gets the ingredients.
   * @returns The list of ingredients.
   */
  getIngredients() {
    return this.http.get(this.baseURL + 'list.php?i=list');
  }

  /**
   * Gets the glasses.
   * @returns The list of glasses.
   */
  getGlasses() {
    return this.http.get(this.baseURL + 'list.php?g=list');
  }

  /**
   * Gets the categories.
   * @returns The list of categories.
   */
  getCategories() {
    return this.http.get(this.baseURL + 'list.php?c=list');
  }

  /**
   * Gets the alcoholic filters.
   * @returns The alcoholic filters list.
   */
  getAlcoholicFilters() {
    return this.http.get(this.baseURL + 'list.php?a=list');
  }

  /**
   * Gets the recipes.
   * @returns The recipes.
   */
  getDrinks() {
    // TODO: Use random endpoint once patreon supporter. Temporarily use search by name for development.
    return this.http.get(this.baseURL + 'search.php?s=margarita');
  }
}
