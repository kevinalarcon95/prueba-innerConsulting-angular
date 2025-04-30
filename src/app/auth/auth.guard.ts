import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
/**
 * AuthGuard is an Angular route guard that checks if the user is authenticated before allowing access to certain routes.
 * If the user is not authenticated, they are redirected to the login page.
 * If the user is authenticated and tries to access the root URL, they are redirected to the home page.
 */
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
