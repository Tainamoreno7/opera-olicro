import { TipoCategoria } from "../enums/tipo-categoria";
import { TipoNegocio } from "../enums/tipo-negocio";

export class Anuncio{
    id?: string;
    tipoCategoria: TipoCategoria = 0;
    tipoNegocio: TipoNegocio= 0;
    residuo: string = "";
    isDeleting: boolean = false;

    // constructor(tipoCategoria: TipoCategoria, tipoNegocio: TipoNegocio, residuo: string){
    //     this.tipoCategoria = tipoCategoria;
    //     this.tipoNegocio = tipoNegocio;
    //     this.residuo = residuo;        
    // }
}
