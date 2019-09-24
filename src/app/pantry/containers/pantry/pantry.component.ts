import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import * as fromStore from '../../store';

import { Ingredient } from 'src/app/shared/models/ingredient.model';

import { AddIngredientComponent } from '../../components/add-ingredient/add-ingredient.component';
@Component({
  selector: 'app-pantry',
  templateUrl: './pantry.component.html',
  styleUrls: ['./pantry.component.scss'],
})
export class PantryComponent implements OnInit {
  ingredients$: Ingredient[];
  animal: string;
  name: string;

  constructor(
    private store: Store<fromStore.IngredientsState>,
    public dialog: MatDialog,
    db: AngularFireDatabase
  ) {
    db.list<Ingredient>('/foody/ingredients')
      .valueChanges()
      .subscribe(ingredients => {
        this.ingredients$ = ingredients;
      });
  }

  ngOnInit() {}

  addIngredient(): void {
    const dialogRef = this.dialog.open(AddIngredientComponent, {
      width: '70vw',
      height: '70vh',
      data: { name: this.name, animal: this.animal },
    });
  }
}
