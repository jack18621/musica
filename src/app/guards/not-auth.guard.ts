import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotAuthGuard implements CanActivate {
  constructor( private router: Router ){

  }
  canActivate(route: ActivatedRouteSnapshot){
    const usuario = localStorage.getItem('usuario');
    if(usuario === 'false' || !usuario){
      return true;
    }
    this.router.navigate(['/home']);
    return false;
  }
}
