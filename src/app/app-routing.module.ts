import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { ShopComponent } from './pages/shop/shop.component';
import { RecipeDetailComponent } from './pages/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './pages/recipes/recipe-edit/recipe-edit.component';
import { RecipeAddComponent } from './pages/recipes/recipe-add/recipe-add.component';
import { RecipeStartComponent } from './pages/recipes/recipe-start/recipe-start.component';

const appRouting: Routes = [
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'add', component: RecipeAddComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent },
    ]
  },
  { path: 'shop', component: ShopComponent },
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRouting)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
