import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Anuncio } from '../anuncio/anuncio';
import { AnunciosService } from '../anuncio/anuncios.service';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  
  anuncios: Anuncio[] = [];
  index: number = 0;

  
  constructor(
    private router: Router,
    private serviceAnuncio: AnunciosService
    
    ) { }

  ngOnInit(): void {
  
  }

 listarResiduo(){
  this.serviceAnuncio.list().subscribe(dados => {
   // {{debugger}}
    this.anuncios = dados;
  });
  this.router.navigate(['residuo']);
  this.index = 1;
  }
  home(){
    
  }

  

}
