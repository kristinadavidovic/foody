import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as IngredientActions from '../actions/ingredients.actions';
import { IngredientService } from 'src/app/core/services/ingredient.service';

@Injectable()
export class IngredientsEffects {
  constructor(
    private actions$: Actions,
    private ingredientService: IngredientService
  ) {}

  @Effect()
  fetchIngredients$ = this.actions$.pipe(
    ofType(IngredientActions.FETCH_INGREDIENTS),
    switchMap(() => {
      return this.ingredientService.fetchIngredients().pipe(
        map(
          ingredients =>
            new IngredientActions.FetchIngredientsSuccess(ingredients)
        ),
        catchError(error =>
          of(new IngredientActions.FetchIngredientsFail(error))
        )
      );
    })
  );

  @Effect()
  addIngredient$ = this.actions$.pipe(
    ofType(IngredientActions.ADD_INGREDIENT),
    map((action: IngredientActions.AddIngredient) => action.payload),
    switchMap(ingredient => {
      return this.ingredientService.addIngredient(ingredient).pipe(
        map(
          ingredient => new IngredientActions.AddIngredientSuccess(ingredient)
        ),
        catchError(error => of(new IngredientActions.AddIngredientFail(error)))
      );
    })
  );
}
