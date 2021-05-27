import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthenticationComponent} from '../../layout/authentication/authentication.component';
import {LoginComponent } from '../../view/login/login.component';
import { CadastroComponent} from '../../view/cadastro/cadastro.component';
import { HomeComponent } from 'src/app/view/home/home.component';

const routes: Routes = [
    { path: '', component:HomeComponent },
    {
        path: '', component: AuthenticationComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: CadastroComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }