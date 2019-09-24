import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ShoppinglistRoutingModule } from './routing/shoppinglist-routing/shoppinglist-routing.module';

import { ShoppingListComponent } from './containers/shopping-list/shopping-list.component';

@NgModule({
  declarations: [ShoppingListComponent],
  imports: [ShoppinglistRoutingModule, SharedModule],
})
export class ShoppingListModule {}
