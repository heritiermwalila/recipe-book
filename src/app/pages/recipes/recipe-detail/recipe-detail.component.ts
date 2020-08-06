import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;

  constructor(private route: ActivatedRoute, private recipeServ: RecipeService) { }

  ngOnInit(): void {

    this.route.params
      .subscribe(
        (param: Params) => {
          console.log(param.id);
          this.recipe = this.recipeServ.getRecipe(+param.id);
        }
      )

  }

}
