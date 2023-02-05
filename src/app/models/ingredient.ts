/**
 * Ingredient Class.
 *
 * Based on API: https://www.thecocktaildb.com/api.php
 */
export class Ingredient {
  /** The ID of the ingredient. */
  id: number;

  /** The name of the ingredient. */
  name: string;

  /** The description of the ingredient. */
  description: string;

  /** The type of the ingredient. */
  type: string;

  /** If the ingredient is alcoholic */
  alcoholic: boolean;

  /** The ABV percentage of the ingredient. */
  abv: string | undefined;

  /**
   * The ingredient constructor.
   *
   * @param id The id.
   * @param name The name.
   * @param descripion The description.
   * @param type The type.
   * @param alcoholic The alcoholic flag.
   * @param abv The ABV value.
   */
  constructor(
    id: number,
    name: string,
    descripion: string,
    type: string,
    alcoholic: boolean,
    abv?: string
  ) {
    this.id = id;
    this.name = name;
    this.description = descripion;
    this.type = type;
    this.alcoholic = alcoholic;
    this.abv = abv ?? undefined;
  }
}
