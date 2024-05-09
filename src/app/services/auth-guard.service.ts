// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthanticationservicesService } from 'src/app/services/authanticationservices.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthanticationservicesService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (localStorage.getItem('token')) {
      return true; // User is authenticated, allow access
    } else {
      this.router.navigate(['login']); // Redirect to login page
      return false; // Prevent access
    }
  }
}
