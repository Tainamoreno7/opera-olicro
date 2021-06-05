import { Anuncio } from './../anuncio/anuncio';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnunciosService } from '../anuncio/anuncios.service';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  anuncios: Anuncio[] = [];
  index: number = 0;
  error: string = '';


  constructor(
    private router: Router,
    private serviceAnuncio: AnunciosService

    ) { }

  ngOnInit(): void {

  }

 listRegister(){
  this.serviceAnuncio.getByUserId().subscribe(dados => {
   {{debugger}}
    this.anuncios = dados;

    let listAnuncio:any = [];

    this.anuncios.forEach((anuncio)=>{
      if(anuncio.fotos != ""){
        anuncio.fotos = `data:image/${anuncio.extFoto};base64,`+anuncio.fotos;
      }

      listAnuncio.push(anuncio);
    });
    this.anuncios = listAnuncio;


  },
  error => {
        this.error = error;
  });
  this.router.navigate(['residuo']);
  this.index = 1;
  }


  listAll(){

    this.serviceAnuncio.getAll().subscribe(dados => {
      {{debugger}}
       this.anuncios = dados;

     },
     error => {
           this.error = error;
     });
     this.router.navigate(['plataforma']);
     this.index = 2;

  }



}
