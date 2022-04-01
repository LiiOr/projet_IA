import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  // constructor(private http: HttpClient, private router: Router) {}

  constructor(private http: HttpClient) {
    this.readAPI('https://api.spoonacular.com/recipes/findByIngredients?apiKey=9a0e0076d4614aabb20bfcc73cccf3ce&ingredients=chicken,potatoes')
      .subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit() {
    //this.getRecipeByIngredients();
    // this.readAPI();
  }

  ingredientsRecipe: any = [];
  recipe: undefined;

  searchIngredient = '';
  
  readAPI(URL: string) {
    return this.http.get(URL);
  }

  // searchRecipe() {
  //   console.log('recherche du film ' + encodeURIComponent(this.searchIngredient).trim());
  //   const search = encodeURIComponent(this.searchIngredient).trim();
  //   console.log(search);
  //   console.log("salut");
  //   this.getRecipeByIngredients(search);
  // }

  //For chicken recipe :
  // getRecipeByIngredients() {
  //   const url = `http://localhost:8000/foodapi/byingredients/chicken`;
  //   this.http.get(url).subscribe((res) => {
  //     this.ingredientsRecipe = res
  //     console.log(this.ingredientsRecipe);
  //   })
  // }
  
  // goToRecipeDetails() {
  //   // this.recipe = recipe;
  //   // console.log(recipe);
  //   this.router.navigate(['recipe-details']);
  // }

}
