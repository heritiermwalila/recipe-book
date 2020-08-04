import { Component, OnInit } from '@angular/core';
import { PageHeader } from 'src/app/shared/page-header.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  header: PageHeader = {
    title: 'Welcome to recipe angular app',
    description: 'This is a simple recipe book built in angular 9. I\'ve use router, custom directives, router guard, observables, services etc...',
  };

  addRecipeStatus: boolean = false

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.addRecipe.subscribe((addRecipe: boolean) => {
      this.addRecipeStatus = addRecipe;
    });

  }

}
