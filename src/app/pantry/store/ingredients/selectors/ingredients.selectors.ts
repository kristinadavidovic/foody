import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromIngredients from '../reducers/ingredients.reducer';

export const getIngredientsState = createFeatureSelector('ingredients');

export const getIngredientEntities = createSelector(
  getIngredientsState,
  fromIngredients.getIngredientsEntities
);

export const getAllIngredients = createSelector(
  getIngredientEntities,
  entities => {
    return Object.keys(entities).map(id => entities[id]);
  }
);
