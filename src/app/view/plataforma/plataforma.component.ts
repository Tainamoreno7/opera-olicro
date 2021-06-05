import { Component, Input, OnInit } from '@angular/core';
import { Anuncio } from '../anuncio/anuncio';
import { AnunciosService } from '../anuncio/anuncios.service';
import { TipoCategoria } from '../enums/tipo-categoria';
import { TipoNegocio } from '../enums/tipo-negocio';
import { TipoOrigem } from '../enums/tipo-origem';
import { TipoUnidade } from '../enums/tipo-unidade.enum';

@Component({
  selector: 'app-plataforma',
  templateUrl: './plataforma.component.html',
  styleUrls: ['./plataforma.component.css']
})
export class PlataformaComponent implements OnInit {

  @Input() anuncios: Anuncio[] | undefined;
  formType: boolean = false;
  index: number = 0;
  anuncioEdit!: Anuncio;
  uriBase64:string = "data:image/jpeg;base64";
  ext: string = "";

    constructor(private anunciosService: AnunciosService) {}

   ngOnInit(): void {


     }


     GetNameEnum(type: any, value: any): string{
      if(type === "tc")
        return TipoCategoria[value];
      if(type === "tn")
        return TipoNegocio[value];
      if(type === "to")
        return TipoOrigem[value];
      if(type === "tu")
        return TipoUnidade[value];

      return "";
    }
}
