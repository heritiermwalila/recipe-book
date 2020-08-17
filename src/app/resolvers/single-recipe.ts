import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from '../services/recipe.service';
import { Injectable } from '@angular/core';

@Injectable()
export class SingleRecipeResolver implements Resolve<Recipe>{
    constructor(private recipeService: RecipeService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const recipe = this.recipeService.getRecipe(+route.params.id)
        return recipe;
    }
}