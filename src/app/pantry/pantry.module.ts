import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// store
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// effects
import { effectsIngredients } from './store';

// reducers
import { IngredientsReducer } from './store/ingredients/reducers/ingredients.reducer';

import { SharedModule } from '../shared/shared.module';

import { PantryRoutingModule } from './routing/pantry-routing.module';

import { PantryResolver } from './routing/resolvers/pantry.resolver';

import { PantryComponent } from './containers/pantry/pantry.component';
import { IngredientComponent } from './components/ingredient/ingredient.component';

@NgModule({
  declarations: [PantryComponent, IngredientComponent],
  imports: [
    SharedModule,
    HttpClientModule,
    PantryRoutingModule,
    StoreModule.forFeature('ingredients', IngredientsReducer),
    // EffectsModule.forFeature(effectsIngredients),
  ],
  providers: [PantryResolver],
})
export class PantryModule {}
