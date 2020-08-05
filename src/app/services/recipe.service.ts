import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../shared/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  public addRecipeEvent = new EventEmitter<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      '10 Minute Apple Sauce',
      'Description for 10 Minute Apple Sauce',
      [
        new Ingredient('apple', 100),
        new Ingredient('Onion', 12),
      ],
      ),
    new Recipe(
      '10 Plagues Pizza',
      'Description for 10 Plagues Pizza',
      [
        new Ingredient('pizza', 20)
      ],
      ),
    new Recipe(
      '3-D Dog Cake',
      'Description for 3-D Dog Cake',
      [
        new Ingredient('cake', 5)
      ],
      ),
    new Recipe(
      '30-Second Chocolate Cake',
      'Description for 30-Second Chocolate Cake',
      [
        new Ingredient('chocolate', 3)
      ],
      ),
  ]
  addRecipe = new EventEmitter<boolean>();

  constructor() { }

  getRecipes(){
    return this.recipes.slice()
  }

  add(recipe: Recipe){
    const newRecipe = new Recipe(
      recipe.name,
      recipe.description,
      recipe.ingredients
    );
    this.recipes.push(newRecipe)
    this.addRecipeEvent.emit(this.recipes.slice());
  }
}
