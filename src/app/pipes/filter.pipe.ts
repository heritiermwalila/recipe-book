import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Recipe[], search: string, ingre?: string): Recipe[] | Recipe | null {
    const result = [];
    const recipes = value.filter(recipe => {
      const ingre = recipe.ingredient.filter(ing => ing.name.indexOf(ingre) !== -1)

      // return recipe.name.indexOf(search) !== -1 && recipe.ingredient.includes()
    });

    return result;
  }

}


//{{ recipes | filter: ballot : apple }}