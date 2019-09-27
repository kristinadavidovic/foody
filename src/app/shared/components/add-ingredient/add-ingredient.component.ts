import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import * as fromStore from '../../../pantry/store';

import { foodCategories, units } from '../../data/helper.data';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.scss'],
})
export class AddIngredientComponent implements OnInit {
  unitsOptions: string[] = units;
  categoriesOptions = [];

  addIngredientForm: FormGroup;

  units = new FormControl();
  categories = new FormControl();

  filteredUnits: Observable<string[]>;
  filteredCategories: Observable<string[]>;

  constructor(
    public dialogRef: MatDialogRef<AddIngredientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private store: Store<fromStore.IngredientsState>
  ) {}

  ngOnInit() {
    for (const category in foodCategories) {
      foodCategories.hasOwnProperty(category) &&
        this.categoriesOptions.push(foodCategories[category].name);
    }

    this.filteredUnits = this.units.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(this.unitsOptions, value))
    );

    this.filteredCategories = this.categories.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(this.categoriesOptions, value))
    );

    this._buildForm();
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    const form = this.addIngredientForm;
    const newIngredient = form.value;

    this.store.dispatch(new fromStore.AddIngredient(newIngredient));
    this.onClose();
  }

  private _buildForm() {
    this.addIngredientForm = new FormGroup({
      name: new FormControl(),
      amount: new FormControl(),
      unit: new FormControl(),
      category: new FormControl(),
    });
  }

  private _filter(options: string[], value: string): string[] {
    return options.filter(option =>
      option.toLowerCase().includes(value.toLowerCase())
    );
  }
}
