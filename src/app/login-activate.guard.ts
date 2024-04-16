import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { OnInit } from '@angular/core';

@Injectable()
export class LoginActivateGuard implements CanActivate, OnInit {
  public logowanie = false;

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.logowanie === false) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  ngOnInit() {}

  public przeloguj() {
    this.logowanie = !this.logowanie;
    this.router.navigate(['campaigns']);
  }
}
