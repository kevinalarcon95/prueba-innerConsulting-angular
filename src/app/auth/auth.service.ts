import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
/**
 * AuthService is responsible for managing user authentication and authorization.
 * It provides methods to log in, log out, check authentication status, and manage redirect URLs.
 * The authentication status is stored in local storage to persist across sessions.
 */
export class AuthService {
  private _isAuthenticated = false;
  private redirectUrl: string = '/';

  constructor(private router: Router) {
    this._isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  }

  login(user: string, password: string): boolean {
    if (user === 'correo@correo.com' && password === '1234') {
      this._isAuthenticated = true;
      localStorage.setItem('isAuthenticated', 'true');

      const savedUrl = this.getRedirectUrl();
      this.router.navigateByUrl(savedUrl);
      return true;
    }
    return false;
  }

  logout() {
    this._isAuthenticated = false;
    localStorage.removeItem('isAuthenticated');
    this.router.navigate(['/login']);
  }

  get isAuthenticated() {
    return localStorage.getItem('isAuthenticated') === 'true';
  }

  setRedirectUrl(url: string) {
    this.redirectUrl = url;
    localStorage.setItem('redirectUrl', url);
  }

  getRedirectUrl(): string {
    const url = localStorage.getItem('redirectUrl') || '/';
    localStorage.removeItem('redirectUrl');
    return url;
  }
}
