import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from './services/auth.service';

export const dashboardGuard: CanActivateFn = (route, state) => {
  const obj = inject(AuthService);
  console.log(obj.isLoggedIn.getValue());
  return obj.isLoggedIn.getValue();
};
