import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsComponent } from './terms/terms.component';
import { SupportComponent } from './support/support.component';
import { UserPolicyComponent } from './user-policy/user-policy.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { PublicRoutingModule } from './public-routing.module';
import { I18nModule } from 'src/app/shared/i18n.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { PrivacyComponent } from './privacy/privacy.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        TermsComponent,
        SupportComponent,
        UserPolicyComponent,
        FaqComponent,
        LoginComponent,
        PrivacyComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        PublicRoutingModule,
        I18nModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        ReactiveFormsModule
    ],
    exports: [],
    providers: [],
})
export class PublicModule { }
