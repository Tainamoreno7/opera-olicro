import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FormBuilder } from '@angular/forms';
import {AccountService} from 'src/app/account/shared/account.service'
import { Router } from '@angular/router';
import { AnunciosService } from '@app/view/anuncio/anuncios.service';
import { Anuncio } from '@app/view/anuncio/anuncio';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  value = 'Clear me';
  isLogging: boolean = false;
  @Input() anuncios: Anuncio[] = [];
  index: number = 0;


  isExpanded:boolean = false;
  isMobile: boolean = false;
  user: String = 'Tainá Moreno';



  constructor(
    private accountService: AccountService,
    private router: Router,
    private serviceAnuncio: AnunciosService
   ) {

  }


  ngOnInit(): void {

    this.accountService.isLogging$.subscribe(
			value => (this.isLogging = value)
		);

    this.setMobile();
   }


  logout(){
    this.accountService.logout();
    this.router.navigate(['/']);

   }

   filter(number:any){
debugger
    console.log(number)
    this.serviceAnuncio.getByTipo(number).subscribe(dados => {
      this.anuncios = dados;
      console.log(dados);
    });
    debugger
    this.router.navigate(['plataforma']);
    this.index = 1;
  }


  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
    this.setMobile();
  }

  setMobile(){
    if(window.innerWidth < 690){
      this.isMobile = true;
      return true;
    }
    return false;
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    stagePadding: 0,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1

      },
      25: {
        items: 2

      },
      20: {
        items: 3
      },
      30: {
        items: 4
      },
      40: {
        items: 5
      },
      50: {
        items: 6
      },
      60: {
        items: 7
      },
      70: {
        items: 8
      },
      80: {
        items: 9
      },
      90: {
        items: 10
      },
      100: {
        items: 11
      },
      110: {
        items: 12
      }
    },
    nav: true
  }



}
