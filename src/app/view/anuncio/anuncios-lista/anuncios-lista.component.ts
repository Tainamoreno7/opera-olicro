import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anuncio } from '../anuncio';
import { AnunciosService } from '../anuncios.service';
import { TipoCategoria } from '../../enums/tipo-categoria';
import { TipoNegocio } from '../../enums/tipo-negocio';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-anuncios-lista',
  templateUrl: './anuncios-lista.component.html',
  styleUrls: ['./anuncios-lista.component.css']
})
export class AnunciosListaComponent implements OnInit {

  @Input() anuncios: Anuncio[] = [];
  formEdit: boolean = false;
  anuncioEdit!: Anuncio;

    constructor(private anunciosService: AnunciosService) {}

    ngOnInit() {
        this.anunciosService.getAll()
            .pipe(first())
            .subscribe(anuncios => this.anuncios = this.anuncios);
    }

    deleteAnuncio(id: any) {
        const anuncio = this.anuncios.find(x => x.id === id);
        if (!anuncio) return;
        anuncio.isDeleting = true;
        {{debugger}}
        this.anunciosService.delete(id)
            .pipe(first())
            .subscribe(() => this.anuncios = this.anuncios.filter(x => x.id !== id));
    }

    onEdit( anuncio: Anuncio){
      this.formEdit = true;
      this.anuncioEdit = anuncio;
    }
}
