import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

// store
import { Store } from '@ngrx/store';

// models
import { Ingredient } from '../../../shared/models/ingredient.model';

import * as fromStore from '../../store';

@Injectable()
export class PantryResolver implements Resolve<boolean> {
  constructor(private store: Store<Ingredient[]>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.store.dispatch(new fromStore.FetchIngredients());

    return true;
  }
}
