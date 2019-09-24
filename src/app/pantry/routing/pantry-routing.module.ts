import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

// resolvers
import { PantryResolver } from './resolvers/pantry.resolver';

// components
import { PantryComponent } from '../containers/pantry/pantry.component';

const routes: Routes = [
  {
    path: '',
    component: PantryComponent,
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
