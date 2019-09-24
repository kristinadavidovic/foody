import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from '../../containers/recipes/recipes.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule {}
