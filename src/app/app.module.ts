import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { ShopComponent } from './pages/shop/shop.component';
import { RecipeDetailComponent } from './pages/recipe/recipe-detail/recipe-detail.component';
import { RecipeAddComponent } from './pages/recipe/recipe-add/recipe-add.component';
import { RecipeEditComponent } from './pages/recipe/recipe-edit/recipe-edit.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { HeaderComponent } from './components/header/header.component';
import { RecipeAddFormComponent } from './components/recipe-add/recipe-add.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    ShopComponent,
    RecipeDetailComponent,
    RecipeAddComponent,
    RecipeAddFormComponent,
    RecipeEditComponent,
    NotFoundComponent,
    RecipeItemComponent,
    PageHeaderComponent,
    DropdownDirective,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
