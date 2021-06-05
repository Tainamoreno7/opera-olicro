import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
//import { CadastroComponent} from './cadastro.component'
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';





@NgModule({
  declarations: [
    // CadastroComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClient
  ]
})
export class CadastroModule { }
