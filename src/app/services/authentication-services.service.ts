import { Injectable } from '@angular/core';
import {Appuser} from '../Model/user.model';
import {UUID} from 'angular2-uuid';
import {Observable, of, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServicesService {

  users : Appuser[] = []
  authenticatedUser : Appuser | undefined
  constructor() {
    this.users.push({userId : UUID.UUID(),username: "admin",password : "123",roles:["USER","ADMIN"]});
    this.users.push({userId : UUID.UUID(),username: "user1",password : "1234",roles:["USER"]});
    this.users.push({userId : UUID.UUID(),username: "user2",password : "12345",roles:["USER"]});
  }
  public login(username:string,password:string):Observable<Appuser>{
    let appUsers =     this.users.find(u => u.username==username);
    if(!appUsers) return  throwError(()=>new Error("Utilisateur non trouvé :/"))
    if (appUsers.password!=password){
      return  throwError(()=>new Error("Mauvaises informations d'identification"))
    }
    return of(appUsers)
  }
  public AuuthenticatedUsers(appUser :Appuser):Observable<boolean>{
    this.authenticatedUser = appUser
    localStorage.setItem("AuthUser", JSON.stringify({ussername:appUser.username,roles:appUser.roles,jwt:"JWT_TOKEN"}))
    return of(true)
  }

  public hasRole(role:string):boolean{
    return   this.authenticatedUser!.roles.includes(role)
  }
  public  isAhthenticated(){
    return this.authenticatedUser!=undefined
  }
}
