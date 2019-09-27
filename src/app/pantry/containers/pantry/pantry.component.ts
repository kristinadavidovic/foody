import { Component, OnInit, OnDestroy } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';

import { MatDialog } from '@angular/material/dialog';

import { Ingredient } from 'src/app/shared/models/ingredient.model';

import { AddIngredientComponent } from '../../../shared/components/add-ingredient/add-ingredient.component';
@Component({
  selector: 'app-pantry',
  templateUrl: './pantry.component.html',
  styleUrls: ['./pantry.component.scss'],
})
export class PantryComponent implements OnInit, OnDestroy {
  ingredients$: Ingredient[];
  animal: string;
  name: string;
  subIngredients: any;

  constructor(public dialog: MatDialog, public db: AngularFireDatabase) {}

  ngOnInit() {
    this.subIngredients = this.db
      .list<Ingredient>('/foody/ingredients')
      .valueChanges()
      .subscribe(ingredients => {
        this.ingredients$ = ingredients;
      });
  }

  addIngredient(): void {
    const dialogRef = this.dialog.open(AddIngredientComponent, {
      width: '70vw',
      height: '70vh',
      data: { name: this.name, animal: this.animal },
    });
  }

  ngOnDestroy() {
    this.subIngredients.unsubscribe();
  }
}
