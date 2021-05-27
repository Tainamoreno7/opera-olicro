import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AccountService } from './account.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private accountService: AccountService)
    {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {

    const user = this.accountService.userValue;
    if (user) {
        // autorizado então retorne verdadeiro
        return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
    return false;


    // const token = window.localStorage.getItem('token');
    // if(token){
    // return true;
    // }else{
    //   this.router.navigate(['login']);
    //   return false;
    // }
  }
  
}
