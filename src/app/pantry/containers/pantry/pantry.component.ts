import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import * as fromStore from '../../store';

import { Ingredient } from 'src/app/shared/models/ingredient.model';

@Component({
  selector: 'app-pantry',
  templateUrl: './pantry.component.html',
  styleUrls: ['./pantry.component.scss'],
})
export class PantryComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'amount',
    'unit',
    'category',
    'actions',
  ];
  ingredients: Ingredient[] = [
    {
      id: 1,
      name: 'Tomato',
      amount: 2,
      unit: 'kg',
      category: 'vegetable',
    },
    {
      id: 2,
      name: 'Potato',
      amount: 2,
      unit: 'kg',
      category: 'vegetable',
    },
  ];
  dataSource = this.ingredients;

  constructor(private store: Store<fromStore.IngredientsState>) {}

  ngOnInit() {}
}
