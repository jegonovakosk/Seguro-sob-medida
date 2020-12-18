import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { NgxPermissionsService } from 'ngx-permissions';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    permissions = ['AUTH'];
    constructor(private authService: AuthService,
        private router: Router,
        private permissionsService: NgxPermissionsService) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        if (this.authService.isLogged()) {
            this.permissionsService.loadPermissions(this.permissions);
            return true;
        } else {
            this.router.navigate(['login']);

        }

    }



}
