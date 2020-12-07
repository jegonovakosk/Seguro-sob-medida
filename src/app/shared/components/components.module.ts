import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { I18nModule } from '../i18n.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StopPropagationModule } from 'ngx-stop-propagation';
import { CardPostComponent } from './card-post/card-post.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { SkeletonPostCardComponent } from './skeleton-post-card/skeleton-post-card.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { UserListComponent } from './user-list/user-list.component';
import { SkeletonUserListComponent } from './skeleton-user-list/skeleton-user-list.component';
import { RouterModule } from '@angular/router';
import { NgxPermissionsModule } from 'ngx-permissions';


@NgModule({
    declarations: [
        SideMenuComponent,
        CardPostComponent,
        SkeletonPostCardComponent,
        UserListComponent,
        SkeletonUserListComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        I18nModule,
        FlexLayoutModule,
        PickerModule,
        StopPropagationModule,
        NgxSkeletonLoaderModule,
        NgxPermissionsModule,
    ],
    exports: [
        SideMenuComponent,
        CardPostComponent,
        SkeletonPostCardComponent,
        UserListComponent
    ]
})
export class ComponentsModule {
}
