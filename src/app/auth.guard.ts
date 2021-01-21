import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,private router:Router){}
  /*canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isLoggedIn();
  }*/
  canActivate(route:ActivatedRouteSnapshot): boolean {
    if (!this.authService.isLoggedIn()) {
     // console.log(!this.authService.isLoggedIn());
      this.router.navigateByUrl('/login');
      return false;
    }
   // this.router.navigate(['/user-access',{CustomerName:route.params.userName}]);
 //  console.log(!this.authService.isLoggedIn());
    return true;
  }
  
}
