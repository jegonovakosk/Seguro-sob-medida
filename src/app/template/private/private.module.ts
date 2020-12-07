import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { PrivateRoutingModule } from './private-routing.module';
import { I18nModule } from 'src/app/shared/i18n.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { StopPropagationModule } from 'ngx-stop-propagation';
import { ComponentsModule } from '../../shared/components/components.module';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { NgxPermissionsModule } from 'ngx-permissions';
import { UserComponent } from './settings/user/user.component';
import { PrivacyComponent } from './settings/privacy/privacy.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
    declarations: [
        HomeComponent,
        NotificationsComponent,
        ProfileComponent,
        SettingsComponent,
        UserComponent,
        PrivacyComponent,
    ],
    imports: [
        CommonModule,
        PickerModule,
        PrivateRoutingModule,
        I18nModule,
        FlexLayoutModule,
        NgxSkeletonLoaderModule,
        StopPropagationModule,
        ComponentsModule,
        NgxPermissionsModule.forChild(),
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        ReactiveFormsModule,
        FormsModule,
        MatCheckboxModule,
        MatRadioModule
    ],
    exports: [],
    providers: [],
})
export class PrivateModule {
}
