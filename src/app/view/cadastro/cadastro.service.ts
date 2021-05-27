import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cadastro } from './cadastro';
import { take, tap } from 'rxjs/operators';
import { AccountService } from 'src/app/account/shared/account.service';
import {} from '../../account/shared/account.service'

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private readonly API = 'http://localhost:3000/account';

  constructor(private http: HttpClient) { }

  create(cadastro:any){
    return this.http.post(this.API, cadastro).pipe(take(1))
  }



}
