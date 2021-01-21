import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import jwtDecode from 'jwt-decode';


import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  /*canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }*/
  constructor(private authService:AuthService,private  router:Router){}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    //const expectedRole = route.data.expectedRole;
    console.log("Entered ROleGaurd");
    console.log("AlwaysAuthGuard");
    return true;
  
   
   // const token = localStorage.getItem('ACCESS_TOKEN');

    // decode the token to get its payload

   // const tokenPayload = jwtDecode.arguments(token);    
  /*  if (
      !this.authService.isLoggedIn() || 
      tokenPayload.role !== expectedRole
    ) {
      this.router.navigateByUrl('/login');
      return false;
    }
    this.router.navigateByUrl('/admin');
    return true;*/



  /*  if(this.authService.isLoggedIn() && tokenPayload.role=='user')
        return true;
     // this.router.navigateByUrl('/user-access');
    
    if(this.authService.isLoggedIn() && tokenPayload.role=='admin')
    return true;
     // this.router.navigateByUrl('/admin');
    
    
      this.router.navigateByUrl('/login');
      return false;
  */
  }
  
}
