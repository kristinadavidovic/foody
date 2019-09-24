import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './core/core.module#CoreModule',
    pathMatch: 'full',
  },
  {
    path: 'recipes',
    loadChildren: './recipes/recipes.module#RecipesModule',
  },
  {
    path: 'shopping-list',
    loadChildren: './shopping-list/shopping-list.module#ShoppingListModule',
  },
  {
    path: 'pantry',
    loadChildren: './pantry/pantry.module#PantryModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
