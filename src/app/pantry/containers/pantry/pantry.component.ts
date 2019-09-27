import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { foodCategories } from '../../../shared/data/helper.data';

import { AddIngredientComponent } from '../../../shared/components/add-ingredient/add-ingredient.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pantry',
  templateUrl: './pantry.component.html',
  styleUrls: ['./pantry.component.scss'],
})
export class PantryComponent implements OnInit {
  categories = foodCategories;

  constructor(public dialog: MatDialog, private route: ActivatedRoute) {}

  ngOnInit() {}

  addIngredient(): void {
    this.dialog.open(AddIngredientComponent, {
      width: '70vw',
      height: '70vh',
      data: { category: 'category name' },
    });
  }
}
