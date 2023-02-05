/**
 * Drink Class.
 *
 * Based on API: https://www.thecocktaildb.com/api.php
 */
export class Drink {
  /** The ID of the drink. */
  id: number;

  /** The name of the drink. */
  name: string;

  /** The tags list. */
  tags: string[];

  /** The category. */
  category: string;

  /** The alcohol content. */
  alcoholContent: string;

  /** The glass type. */
  glass: string;

  /** The instructions.  */
  instructions: string;

  /** The thumbnail image URL. */
  thumbnail: string;

  /** The ingredients list. */
  ingredients: string[];

  /** The measurements list.  */
  measurements: string[];

  /** The IBA (International Bar Association) category */
  ibaCategory: string | undefined;

  /**
   * The drink constructor.
   *
   * @param id The ID.
   * @param name The name.
   * @param tags The tags list.
   * @param category The category.
   * @param alcoholContent The alcohol content.
   * @param glass The glass.
   * @param instructions The instructions.
   * @param thumbnail The thumbnail URL.
   * @param ingredients The ingredients list.
   * @param measurements The measurements.
   * @param ibaCategory The IBA category.
   */
  constructor(
    id: number,
    name: string,
    tags: string[],
    category: string,
    alcoholContent: string,
    glass: string,
    instructions: string,
    thumbnail: string,
    ingredients: string[],
    measurements: string[],
    ibaCategory?: string
  ) {
    this.id = id;
    this.name = name;
    this.tags = tags;
    this.category = category;
    this.alcoholContent = alcoholContent;
    this.glass = glass;
    this.instructions = instructions;
    this.thumbnail = thumbnail;
    this.ingredients = ingredients;
    this.measurements = measurements;
    this.ibaCategory = ibaCategory ?? undefined;
  }
}
