import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.scss']
})
export class RecipeAddComponent implements OnInit {

  constructor(private recipeServ: RecipeService) { }

  ngOnInit(): void {
  }

  onSubmitHandler(data: Recipe){
    this.recipeServ.add(data);
  }

}
