import { Injectable } from '@angular/core';
import { RecipeService } from './recipe.service';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../models/recipe.model';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(private recipeService: RecipeService, private http: HttpClient) {}

  save() {
    this.http
      .put(
        'https://ng-recipe-app-b7b9e.firebaseio.com/recipes.json',
        this.recipeService.getRecipes()
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  get() {
    return this.http
      .get<Recipe[]>('https://ng-recipe-app-b7b9e.firebaseio.com/recipes.json')
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredient: recipe.ingredient ? recipe.ingredient : []
            };
          });
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}
