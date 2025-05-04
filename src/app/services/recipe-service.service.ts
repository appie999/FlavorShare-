import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {
  private url="http://localhost:3000/recipe"
  constructor(private http :HttpClient,private routrt:Router) { }

  obtenirDonnee():Observable<any>{
    return this.http.get<any>(this.url)
  }

  ajouteRec(posteDonne:any):Observable<any>{
    return this.http.post<any>("http://localhost:3000/recipe",posteDonne)
  }

  afichererrecipeParid(id:string):Observable<any>{
    return this.http.get(`${this.url}/${id}`)
  }

  supprimerRecipe(id:any):Observable<any>{
    return this.http.delete(`${this.url}/${id}`)
  }
}
