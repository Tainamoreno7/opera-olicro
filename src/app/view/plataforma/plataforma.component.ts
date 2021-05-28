import { Component, Input, OnInit } from '@angular/core';
import { Anuncio } from '../anuncio/anuncio';
import { AnunciosService } from '../anuncio/anuncios.service';


@Component({
  selector: 'app-plataforma',
  templateUrl: './plataforma.component.html',
  styleUrls: ['./plataforma.component.css']
})
export class PlataformaComponent implements OnInit {
 
  @Input() anuncios: Anuncio[] = [];

    constructor(private anunciosService: AnunciosService) {}

  ngOnInit(): void {
    this.anunciosService.getAll().subscribe(dados => this.anuncios = dados);  }
  

}
