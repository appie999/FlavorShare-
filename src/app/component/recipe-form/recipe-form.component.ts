import {Component, OnInit} from '@angular/core';
import {RecipeServiceService} from '../services/recipe-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-recipe',
  templateUrl: './form-recipe.component.html',
  styleUrl: './form-recipe.component.css'
})
export class FormRecipeComponent implements OnInit{
  recipesList:any[] = []
  recipe = {
    nom : '',
    ingredients : '',
    etapes : '',
    img : '',
    categorie : '',
    data : new Date()
  }


  constructor(private RecipeServices:RecipeServiceService,private router:Router) {
  }
  ngOnInit(): void {
    this.getRecipes()
  }


  getRecipes(){
    this.RecipeServices.obtenirDonnee().subscribe(Recipe=>{
      this.recipesList = Recipe
      console.log(Recipe)
    })
  }
  ajouterRecipe(){
    this.RecipeServices.ajouteRec(this.recipe).subscribe(recipAdd=>{
      this.recipesList = recipAdd
      if (recipAdd){
        this.router.navigateByUrl('/recipe-list')
      }
    })
  }
}
