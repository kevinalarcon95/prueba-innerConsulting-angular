import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isAuthenticated = false;

  login(user: string, password: string): boolean {
    if (user === 'correo@correo.com' && password === '1234') {
      this._isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout() {
    this._isAuthenticated = false;
  }

  get isAuthenticated() {
    return this._isAuthenticated;
  }
}
