import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';

import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  urlIngredients = '';

  constructor(private http: HttpClient) {}

  fetchIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.urlIngredients).pipe();
  }
}
