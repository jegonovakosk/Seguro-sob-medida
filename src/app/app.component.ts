import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    permissions = [];

    constructor(private translate: TranslateService,
                private permissionsService: NgxPermissionsService) {
        this.translate.setDefaultLang('informal');
        this.permissionsService.loadPermissions(this.permissions);

    }

}
