import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Router ,RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let loggedUser = localStorage.getItem("LOGGED_IN_USER");
      if(loggedUser == null){
        alert("You are not logged in");
        this.router.navigate(['login']);
        return false;
      }  
      return true;
  }
  
}
