import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isAuthenticated) {
      if (state.url === '' || state.url === '/') {
        this.router.navigate(['/home']);
        return false;
      }
      return true;
    } else {
      this.authService.setRedirectUrl(state.url);
      this.router.navigate(['/login']);
      return false;
    }
  }
}
