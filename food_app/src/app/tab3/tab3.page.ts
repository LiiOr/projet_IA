import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.getRecipeByIngredients();
  }

  ingredientsRecipe: any = [];
  recipe: undefined;

  searchIngredient = '';
  
  // searchRecipe() {
  //   console.log('recherche du film ' + encodeURIComponent(this.searchIngredient).trim());
  //   const search = encodeURIComponent(this.searchIngredient).trim();
  //   console.log(search);
  //   console.log("salut");
  //   this.getRecipeByIngredients(search);
  // }

  //For chicken recipe :
  getRecipeByIngredients() {
    const url = `http://localhost:8000/foodapi/byingredients/chicken`;
    this.http.get(url).subscribe((res) => {
      this.ingredientsRecipe = res
      console.log(this.ingredientsRecipe);
    })
  }
  
  goToRecipeDetails() {
    // this.recipe = recipe;
    // console.log(recipe);
    this.router.navigate(['recipe-details']);
  }

}
