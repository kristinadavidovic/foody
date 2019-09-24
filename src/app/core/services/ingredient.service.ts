import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { AngularFireDatabase } from '@angular/fire/database';

import { Ingredient } from 'src/app/shared/models/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  urlIngredients = 'https://kdsi-apps.firebaseio.com/foody/ingredients.json';

  constructor(private http: HttpClient, private db: AngularFireDatabase) {}

  fetchIngredients(): Observable<Ingredient[]> {
    return this.http
      .get<Ingredient[]>(this.urlIngredients)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  addIngredient(payload: Ingredient): Observable<Ingredient> {
    return this.http
      .post<Ingredient>(`${this.urlIngredients}`, payload)
      .pipe(tap(ingredient => console.log(ingredient)))
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
