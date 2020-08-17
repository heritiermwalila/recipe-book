import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';
import { EditData } from '../shared/interfaces';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  public recipeEvent = new Subject<Recipe[]>();

  // recipes: Recipe[] = [
  //   new Recipe(1, 'Phulka Tacos Recipe', 'description for Bok Choy', [
  //     new Ingredient('onion', 1),
  //     new Ingredient('cucumber', 4),
  //     new Ingredient('green chilli', 3)
  //   ]),
  //   new Recipe(
  //     2,
  //     'Almond And Rose Kheer Recipe',
  //     'description for Almond And Rose Kheer Recipe',
  //     [
  //       new Ingredient('fat milk', 2),
  //       new Ingredient('rice', 120),
  //       new Ingredient('grain', 120)
  //     ]
  //   ),
  //   new Recipe(
  //     3,
  //     'Sugar Free Modak Recipe',
  //     'description for Sugar Free Modak Recipe',
  //     [new Ingredient('seedless', 400), new Ingredient('almonds', 100)]
  //   ),
  //   new Recipe(
  //     4,
  //     'Poached Egg over Spinach and Mushroom',
  //     'description for Poached Egg over Spinach and Mushroom',
  //     [
  //       new Ingredient('flour', 2),
  //       new Ingredient('semolina', 2),
  //       new Ingredient('lemon juice', 2)
  //     ]
  //   )
  // ];
  private recipes: Recipe[] = [];

  constructor() {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeEvent.next(this.recipes.slice());
  }

  // get all recipes
  getRecipes() {
    return this.recipes.slice();
  }

  // get single recipe
  getRecipe(id: number) {
    return this.recipes.find(recipe => recipe.id === id);
  }

  // add recipe
  add(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeEvent.next(this.recipes.slice());
  }

  // edit
  edit(id: number, data: EditData) {
    //
    const index = this.recipes.findIndex(recipe => recipe.id === +id);
    this.recipes[index].name = data.name;
    this.recipes[index].description = data.description;
    this.recipes[index].ingredient = data.ingredient;
    this.recipeEvent.next(this.recipes.slice());
  }

  // delete
  delete(id: number) {}
}
