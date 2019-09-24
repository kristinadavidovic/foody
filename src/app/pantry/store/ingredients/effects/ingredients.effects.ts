import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
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
    // switchMap(() => {
    //   // return this.ingredientService.
    // })
  );
}
