import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

// resolvers
import { PantryResolver } from './resolvers/pantry.resolver';

// components
import { PantryComponent } from '../containers/pantry/pantry.component';
import { IngredientsListComponent } from '../containers/ingredients-list/ingredients-list.component';

const routes: Routes = [
  {
    path: '',
    component: PantryComponent,
  },
  {
    path: ':category',
    component: IngredientsListComponent,
    resolve: {
      pantryResolver: PantryResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PantryRoutingModule {}
