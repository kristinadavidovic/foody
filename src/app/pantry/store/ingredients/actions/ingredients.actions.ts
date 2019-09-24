import { Action } from '@ngrx/store';

import { Ingredient } from 'src/app/shared/models/ingredient.model';

export const FETCH_INGREDIENTS = '[Ingredients] Fetch Ingredients';
export const FETCH_INGREDIENTS_FAIL = '[Ingredients] Fetch Ingredients Fail';
export const FETCH_INGREDIENTS_SUCCESS =
  '[Ingredients] Fetch Ingredients Success';

export class FetchIngredients implements Action {
  readonly type = FETCH_INGREDIENTS;
}

export class FetchIngredientsFail implements Action {
  readonly type = FETCH_INGREDIENTS_FAIL;
  constructor(public payload: any) {}
}

export class FetchIngredientsSuccess implements Action {
  readonly type = FETCH_INGREDIENTS_SUCCESS;
  constructor(public payload: Ingredient[]) {}
}

export const ADD_INGREDIENT = '[Ingredients] Add ingredient';
export const ADD_INGREDIENT_FAIL = '[Ingredients] Add ingredient Fail';
export const ADD_INGREDIENT_SUCCESS = '[Ingredients] Add ingredient Success';

export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT;
  constructor(public payload: Ingredient) {}
}

export class AddIngredientFail implements Action {
  readonly type = ADD_INGREDIENT_FAIL;
  constructor(public payload: any) {}
}

export class AddIngredientSuccess implements Action {
  readonly type = ADD_INGREDIENT_SUCCESS;
  constructor(public payload: Ingredient) {}
}

export type IngredientsActions =
  | FetchIngredients
  | FetchIngredientsFail
  | FetchIngredientsSuccess
  | AddIngredient
  | AddIngredientFail
  | AddIngredientSuccess;
