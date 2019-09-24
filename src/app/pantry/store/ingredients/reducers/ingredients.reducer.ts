import { Ingredient } from 'src/app/shared/models/ingredient.model';

import * as fromIngredients from '../actions/ingredients.actions';

export interface IngredientsState {
  entities: { [id: number]: Ingredient };
  loaded: boolean;
  loading: boolean;
}

export const initialStateIngredients: IngredientsState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function IngredientsReducer(
  state = initialStateIngredients,
  action: fromIngredients.IngredientsActions
): IngredientsState {
  switch (action.type) {
    case fromIngredients.FETCH_INGREDIENTS: {
      return;
    }

    default:
      return state;
  }
}

export const getIngredientsEntities = (state: IngredientsState) =>
  state.entities;
export const getIngredientsLoaded = (state: IngredientsState) => state.loaded;
export const getIngredientsLoading = (state: IngredientsState) => state.loading;
