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
      return {
        ...state,
        loading: true,
      };
    }

    case fromIngredients.FETCH_INGREDIENTS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false,
      };
    }

    case fromIngredients.FETCH_INGREDIENTS_SUCCESS: {
      const ingredients = action.payload;
      const entities = [];

      for (let [key, value] of Object.entries(ingredients)) {
        entities.push(value);
      }

      return {
        ...state,
        loaded: true,
        loading: false,
        entities,
      };
    }

    case fromIngredients.ADD_INGREDIENT: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromIngredients.ADD_INGREDIENT_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }

    case fromIngredients.ADD_INGREDIENT_SUCCESS: {
      const ingredient = action.payload;
      const id = Object.keys(state.entities).length;

      console.log(ingredient);

      const entities = {
        ...state.entities,
        [id]: ingredient,
      };

      return {
        ...state,
        entities,
      };
    }

    default:
      return state;
  }
}

export const getIngredientsEntities = (state: IngredientsState) =>
  state.entities;
export const getIngredientsLoaded = (state: IngredientsState) => state.loaded;
export const getIngredientsLoading = (state: IngredientsState) => state.loading;
