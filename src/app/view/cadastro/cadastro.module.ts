import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CadastroComponent} from './cadastro.component'
import { FormsModule } from '@angular/forms';
import { User } from 'src/app/shared/model/user';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';





@NgModule({
  declarations: [
    CadastroComponent,
    User
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClient
  ]
})
export class CadastroModule { }
