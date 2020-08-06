import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { ShopComponent } from './pages/shop/shop.component';
import { RecipeDetailComponent } from './pages/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './pages/recipes/recipe-edit/recipe-edit.component';
import { RecipeAddComponent } from './pages/recipes/recipe-add/recipe-add.component';
import { UiRecipeItemComponent } from './pages/recipes/components/ui-recipe-item/ui-recipe-item.component';
import { UiRecipeEditComponent } from './pages/recipes/components/ui-recipe-edit/ui-recipe-edit.component';
import { UiRecipeAddComponent } from './pages/recipes/components/ui-recipe-add/ui-recipe-add.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RecipeStartComponent } from './pages/recipes/recipe-start/recipe-start.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    ShopComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    RecipeAddComponent,
    UiRecipeItemComponent,
    UiRecipeEditComponent,
    UiRecipeAddComponent,
    DropdownDirective,
    NavigationComponent,
    RecipeStartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
