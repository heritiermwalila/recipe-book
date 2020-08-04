import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router'
import { RecipeComponent } from './pages/recipe/recipe.component';
import { ShopComponent } from './pages/shop/shop.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RecipeAddComponent } from './components/recipe-add/recipe-add.component';

const appRoutes: Routes = [
  {
    path: 'recipes',
    component: RecipeComponent,
    children: [
      {path: 'add', component: RecipeAddComponent}
    ]
  },
  {path: 'shop', component: ShopComponent},
  {path: '', redirectTo: 'recipes', pathMatch:'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
