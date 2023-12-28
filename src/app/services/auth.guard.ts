import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const islogin: boolean = inject(AuthService).isLoginIn();


  return islogin || router.navigate(['/login']);
};
