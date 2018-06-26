import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {SECURITY_TOKEN} from './security-constants';

@Injectable()
export class AuthGuard implements CanActivate {

  public isAuthenticated: boolean;

  constructor(private router: Router) {
    this.isAuthenticated = false;
  }

  public canActivate() {
    return !!localStorage.getItem(SECURITY_TOKEN);
  }
}
