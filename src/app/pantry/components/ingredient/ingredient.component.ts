import { Component, OnInit, Input } from '@angular/core';

import { Ingredient } from 'src/app/shared/models/ingredient.model';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss'],
})
export class IngredientComponent implements OnInit {
  @Input() ingredient: Ingredient;

  constructor() {}

  ngOnInit() {}
}
