import { Routes } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {RecipeListComponent} from './component/recipe-list/recipe-list.component';
import {RecipeDetailComponent} from './component/recipe-detail/recipe-detail.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'recipes', component: RecipeListComponent},
  {path: 'recipe-detail', component : RecipeDetailComponent}
];
