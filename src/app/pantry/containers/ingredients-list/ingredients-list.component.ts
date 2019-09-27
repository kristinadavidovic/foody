import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { AngularFireDatabase } from '@angular/fire/database';

import { Ingredient } from 'src/app/shared/models/ingredient.model';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.scss'],
})
export class IngredientsListComponent implements OnInit, OnDestroy {
  ingredients$: Ingredient[];
  subIngredients: any;
  activeCategory: string;

  constructor(public db: AngularFireDatabase, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.activeCategory = params.category;
    });

    this.subIngredients = this.db
      .list<Ingredient>('/foody/ingredients')
      .valueChanges()
      .subscribe(ingredients => {
        const filteredIngredients = [];

        for (const key in ingredients) {
          ingredients.hasOwnProperty(key) &&
            ingredients[key].category == this.activeCategory &&
            filteredIngredients.push(ingredients[key]);
        }

        this.ingredients$ = filteredIngredients;
      });
  }

  ngOnDestroy() {
    this.subIngredients.unsubscribe();
  }
}
