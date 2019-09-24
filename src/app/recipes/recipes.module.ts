import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { RecipesRoutingModule } from './routing/recipes-routing/recipes-routing.module';

import { RecipesComponent } from './containers/recipes/recipes.component';

@NgModule({
  declarations: [RecipesComponent],
  imports: [RecipesRoutingModule, SharedModule],
})
export class RecipesModule {}
