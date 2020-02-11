import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test', 'This is a test', 'https://www.themediterraneandish.com/wp-content/uploads/2019/04/Italian-Baked-Chicken-Recipe-6.jpg'),
    new Recipe('A test', 'This is a test', 'https://www.themediterraneandish.com/wp-content/uploads/2019/04/Italian-Baked-Chicken-Recipe-6.jpg')

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
