import { User } from './../../shared/model/user';
import { Endereco } from './../../shared/model/endereco';
import { TipoOrigem } from './../enums/tipo-origem';
import { TipoCategoria } from "../enums/tipo-categoria";
import { TipoNegocio } from "../enums/tipo-negocio";
import { TipoUnidade } from '../enums/tipo-unidade.enum';
import { Byte } from '@angular/compiler/src/util';

export class Anuncio{
    id?: string;
    tipoCategoria: TipoCategoria = 0;
    tipoNegocio: TipoNegocio= 0;
    tipoOrigem: TipoOrigem = 0;
    tipoUnidade: TipoUnidade = 0;
    residuo: string = "";
    isDeleting: boolean = false;
    titulo: string = "";
    detalhes: string = "";
    recipiente: string = "";
    quantidade: string = "";
    frequencia: string = "";
    solucao: string = "";
    fotos?: string;
    endereco: Endereco = new Endereco;
    user: User = new User;
    extFoto: string = "";

    // constructor(tipoCategoria: TipoCategoria, tipoNegocio: TipoNegocio, residuo: string){
    //     this.tipoCategoria = tipoCategoria;
    //     this.tipoNegocio = tipoNegocio;
    //     this.residuo = residuo;
    // }
}
