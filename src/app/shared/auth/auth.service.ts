import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorage } from '../models/localStorage.enum';
import { LoginStorage } from '../models/loginStorage.interface';
import { Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';

@Injectable({ providedIn: 'root' })
export class AuthService {
    permissions = ['AUTH'];

    constructor(private httpClient: HttpClient,
        private router: Router,
        private permissionsService: NgxPermissionsService) {
    }

    doLogin(user): boolean {

        if (user.user === 'adminadmin' && user.password === 'dcba4321') {
            const loginStorage: LoginStorage = {
                stayConnected: false,
                isLogged: true
            };
            window.sessionStorage.setItem(LocalStorage.LOGIN_STORAGE, JSON.stringify(loginStorage));
            this.router.navigate(['/new-user']);
            this.permissionsService.loadPermissions(this.permissions);
            return true;
        }

        return false;

    }

    isLogged(): boolean {
        const loginStorage: LoginStorage = JSON.parse(window.sessionStorage.getItem(LocalStorage.LOGIN_STORAGE));
        return !!loginStorage?.isLogged;
    }

    doLogout(): void {
        window.sessionStorage.removeItem(LocalStorage.LOGIN_STORAGE);
        this.router.navigate(['/login']);
        this.permissionsService.loadPermissions([]);
    }

}
