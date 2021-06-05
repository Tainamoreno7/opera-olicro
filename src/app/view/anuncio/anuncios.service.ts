import { User } from './../../shared/model/user';
import { AccountService } from './../../account/shared/account.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Anuncio } from './anuncio';
import { take, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { environment } from '@environments/environment';

const baseUrl = `${environment.apiUrl}anuncio`;

@Injectable({
  providedIn: 'root',
})
export class AnunciosService {
  constructor(private http: HttpClient, private service: AccountService) {}

   getAll() {
    debugger;
    const id = this.service.userValue.id;
    const params: HttpParams = new HttpParams();


    if (id) {
    params.set('id', id);

    }


  return this.http.get<Anuncio[]>(`${baseUrl}/getAll`, {params:params});
  }

  getByUserId() {
    debugger;
    const id = this.service.userValue.id;

    return this.http.get<Anuncio[]>(`${baseUrl}/getByUserId/${id}`);
  }

  getByTipo(tipo: number) {
debugger
    return this.http.get<Anuncio[]>(`${baseUrl}/GetByTipo/${tipo}`);
  }
//   private base64ToArrayBuffer(base64:string) {
//     debugger
//   var binary_string = window.atob(base64);
//   var len = binary_string.length;
//   var bytes = new Uint8Array(new ArrayBuffer(len));
//   for (var i = 0; i < len; i++) {
//       bytes[i] = binary_string.charCodeAt(i);
//   }
//   return bytes;
// }


  create(anuncio: any) {
    var anuncioRegister = new Anuncio();
    debugger;

    // setando os atributos do anuncio
    anuncioRegister.tipoNegocio = parseInt(anuncio.tipoNegocio);
    anuncioRegister.tipoOrigem = parseInt(anuncio.tipoOrigem);
    anuncioRegister.tipoUnidade = parseInt(anuncio.tipoUnidade);
    anuncioRegister.titulo = anuncio.titulo;
    anuncioRegister.residuo = anuncio.residuo;
    anuncioRegister.detalhes = anuncio.detalhes;
    anuncioRegister.fotos =  anuncio.fotos;
    anuncioRegister.extFoto = anuncio.ext;
    anuncioRegister.frequencia = anuncio.frequencia;
    anuncioRegister.quantidade = anuncio.quantidade;
    anuncioRegister.recipiente = anuncio.recipiente;
    anuncioRegister.solucao = anuncio.solucao;
    anuncioRegister.tipoCategoria = parseInt(anuncio.tipoCategoria);
    anuncioRegister.user = this.service.userValue;

    //Setando o endereço
    anuncioRegister.endereco.CEP = anuncio.CEP;
    anuncioRegister.endereco.bairro = anuncio.bairro;
    anuncioRegister.endereco.cidade = anuncio.cidade;
    anuncioRegister.endereco.complemento = anuncio.complemento;
    anuncioRegister.endereco.estado = anuncio.estado;
    anuncioRegister.endereco.numero = anuncio.numero;
    anuncioRegister.endereco.rua = anuncio.rua;

    return this.http.post(`${baseUrl}/createAnuncio`, anuncioRegister);
  }

  update(anuncio: any) {
    var anuncioRegister = new Anuncio();
    debugger

    // setando os atributos do anuncio

    anuncioRegister.tipoNegocio = parseInt(anuncio.tipoNegocio);
    anuncioRegister.tipoOrigem = parseInt(anuncio.tipoOrigem);
    anuncioRegister.tipoUnidade = parseInt(anuncio.tipoUnidade);
    anuncioRegister.titulo = anuncio.titulo;
    anuncioRegister.residuo = anuncio.residuo;
    anuncioRegister.detalhes = anuncio.detalhes;
    anuncioRegister.fotos =  anuncio.fotos;
    anuncioRegister.extFoto = anuncio.ext;
    anuncioRegister.frequencia = anuncio.frequencia;
    anuncioRegister.quantidade = anuncio.quantidade;
    anuncioRegister.recipiente = anuncio.recipiente;
    anuncioRegister.solucao = anuncio.solucao;
    anuncioRegister.tipoCategoria = parseInt(anuncio.tipoCategoria);
    anuncioRegister.user = this.service.userValue;

    //Setando o endereço
    anuncioRegister.endereco.CEP = anuncio.CEP;
    anuncioRegister.endereco.bairro = anuncio.bairro;
    anuncioRegister.endereco.cidade = anuncio.cidade;
    anuncioRegister.endereco.complemento = anuncio.complemento;
    anuncioRegister.endereco.estado = anuncio.estado;
    anuncioRegister.endereco.numero = anuncio.numero;
    anuncioRegister.endereco.rua = anuncio.rua;


    return this.http.put(`${baseUrl}/updateAnuncio`, anuncioRegister);
  }

  delete(id: string) {
    return this.http.delete(`${baseUrl}/deleteAnuncio/${id}`);
  }

  list(): Observable<Anuncio[]> {
    debugger;
    return this.http.get<Anuncio[]>(`${baseUrl}/getAll`).pipe(tap(console.log));
  }
}

// ;

// constructor(
//   private http: HttpClient,
//   private cadastroService: CadastroService
//   ) { }
