import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>()


  // recipes: Recipe[] = [
  //   new Recipe(
  //     'Test recipe 1',
  //     'test description 1',
  //     'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
  //   ),
  //   new Recipe(
  //     'Test recipe 2',
  //     'test description 2',
  //     'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
  //   ),
  // ]; // the only thing that will be stored inside here will be Recipes object

  // constructor() {}

  // ngOnInit(): void {}

  // onRecipeSelected(recipe: Recipe){
  //   this.recipeWasSelected.emit(recipe)
  // }

  recipes: Recipe[];

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }
}
