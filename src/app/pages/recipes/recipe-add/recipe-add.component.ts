import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/models/recipe.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.scss']
})
export class RecipeAddComponent implements OnInit {

  constructor(private recipeServ: RecipeService) { }

  ngOnInit(): void {
  }

  onAddRecipe(recipe: FormGroup){

   const newRecipe = new Recipe(
     this.recipeServ.getRecipes().length + 1,
     recipe.value.name,
     recipe.value.description,
     recipe.value.ingredients,
     recipe.value.imageurl
   );
   this.recipeServ.add(newRecipe);
  }

}
