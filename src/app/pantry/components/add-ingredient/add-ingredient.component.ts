import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import * as fromStore from '../../store';

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
  unitsOptions: string[] = ['kg', 'ml', 'g', 'tbs', 'tsp', 'fl oz', 'cup'];
  categoriesOptions: string[] = ['vegetables', 'fruits'];

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
    const filterValue = value.toLowerCase();

    return options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
