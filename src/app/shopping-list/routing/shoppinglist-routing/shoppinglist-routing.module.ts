import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from '../../containers/shopping-list/shopping-list.component';

const routes: Routes = [
  {
    path: '',
    component: ShoppingListComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppinglistRoutingModule {}
