
import { CanActivateFn } from '@angular/router';

let user = localStorage.getItem('email')
export const dashboardGuard: CanActivateFn = (route, state) => {

  if (user) {
    return true;
  } else {

    return false;
  }
};
