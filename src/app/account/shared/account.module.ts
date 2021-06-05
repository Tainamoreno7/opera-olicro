import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import {AuthenticationComponent} from '../../layout/authentication/authentication.component';
// import {LoginComponent } from '../../view/login/login.component';
//import { CadastroComponent} from '../../view/cadastro/cadastro.component';
import { HomeComponent } from 'src/app/view/home/home.component';
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountRoutingModule
    ],
    declarations: [
        AuthenticationComponent,
        // LoginComponent,
        //CadastroComponent,
        HomeComponent
    ]
})
export class AccountModule { }
