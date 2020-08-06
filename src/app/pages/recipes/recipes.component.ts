import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {


  recipes: Recipe[];

  constructor(private recipeServ: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeServ.getRecipes();
  }

}
