import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes: Recipe[] = [
    new Recipe(
      1,
      'Phulka Tacos Recipe',
      'description for Bok Choy',
      [
        new Ingredient('onion', 1),
        new Ingredient('cucumber', 4),
        new Ingredient('green chilli', 3),
      ]
    ),
    new Recipe(
      2,
      'Almond And Rose Kheer Recipe',
      'description for Almond And Rose Kheer Recipe',
      [
        new Ingredient('fat milk', 2),
        new Ingredient('rice', 120),
        new Ingredient('grain', 120),
      ]
    ),
    new Recipe(
      3,
      'Sugar Free Modak Recipe',
      'description for Sugar Free Modak Recipe',
      [
        new Ingredient('seedless', 400),
        new Ingredient('almonds', 100),
      ]
    ),
    new Recipe(
      4,
      'Beetroot Modak Recipe',
      'description for Beetroot Modak Recipe',
      [
        new Ingredient('flour', 2),
        new Ingredient('semolina', 2),
        new Ingredient('lemon juice', 2),
      ]
    ),
  ]

  constructor() { }


  // get all recipes
  getRecipes(){
    return this.recipes.slice()
  }

  // get single recipe
  getRecipe(id: number){
    return this.recipes.find(recipe => recipe.id === id);
  }

  // add recipe
  add(recipe: Recipe){

  }

  // edit
  edit(id: number, recipe: {name: string; description: string; ingredient: Ingredient[]}){
    //
  }

  // delete
  delete(id: number){

  }
}
