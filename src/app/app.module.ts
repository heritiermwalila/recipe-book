import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { ShopService } from './services/shop.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiShopAddComponent } from './pages/shop/component/ui-shop-add/ui-shop-add.component';
import { UiShopItemComponent } from './pages/shop/component/ui-shop-item/ui-shop-item.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ErrorComponent } from './components/error/error.component';
import { AuthInterceptor } from './interceptors/auth';
import { FilterPipe } from './pipes/filter.pipe';
import { SingleRecipeResolver } from './resolvers/single-recipe';

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
    UiShopAddComponent,
    UiShopItemComponent,
    AuthComponent,
    SpinnerComponent,
    ErrorComponent,
    FilterPipe
    // FormsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ShopService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, SingleRecipeResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
