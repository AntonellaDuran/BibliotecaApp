import { inject } from "@angular/core";
import { Router } from "@angular/router";

export const loginGuard = (): boolean => {
   const router = inject(Router)
  if (localStorage.getItem('token_biblio')) {
    return true;
  } else {
    router.navigate(['/inicio']);
    return false;
  }
};