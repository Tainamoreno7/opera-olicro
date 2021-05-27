import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Anuncio } from './anuncio';
import { take, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { environment } from '@environments/environment';

const baseUrl = `${environment.apiUrl}api/anuncio`;

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {
    constructor(private http: HttpClient) { }


    getAll() {
        return this.http.get<Anuncio[]>(`${baseUrl}/getAll`);
    }

    getByUserId(id: string) {
        
        return this.http.get<Anuncio>(`${baseUrl}/getByUserId/${id}`);
    }

    create(params: any) {
        return this.http.post(baseUrl, params);
    }

    update(anuncio: Anuncio) {
      debugger
        return this.http.put(`${baseUrl}/updateAnuncio`, anuncio);
    }

    delete(id: string) {
        return this.http.delete(`${baseUrl}/deleteAnuncio/${id}`);
    }
    
  list(): Observable<Anuncio[]>{
    return this.http.get<Anuncio[]>(`${baseUrl}/getAll`).pipe(
      tap(console.log)
    );
  }

  

}


  // ;


  // constructor(
  //   private http: HttpClient,
  //   private cadastroService: CadastroService
  //   ) { }


