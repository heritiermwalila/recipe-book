import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {

  recipe: Recipe;
  constructor(private route: ActivatedRoute, private recipeServ: RecipeService) { }

  ngOnInit(): void {

    this.route.params
      .subscribe(
        (param: Params) => {
          this.recipe = this.recipeServ.getRecipe(+param.id);
        }
      )
  }

}
