import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { error } from 'selenium-webdriver';
import { Anuncio } from '../anuncio';
import { AnunciosService } from '../anuncios.service';
import{ AlertService } from'../../../shared/service/alert.service';
import { first } from 'rxjs/operators';
import { Input } from '@angular/core';

@Component({
  selector: 'app-anuncio-form',
  templateUrl: './anuncio-form.component.html',
  styleUrls: ['./anuncio-form.component.css']
})
export class AnuncioformComponent implements OnInit {
  @Input() anuncio: Anuncio = new Anuncio();
  @Input() formEdit: boolean = false;

  constructor(
    private service: AnunciosService,
    private http: HttpClient,
    private form: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService
    ) { }



  residuo = 
  {
    tipoNegocio:'',
     tipoCategoria:'',
      residuo:'',
  };

  ngOnInit(): void {


    this.route.params.subscribe(
      (params: any) => {
        const id = params ['id'];
        console.log(id);
      }
    )

  }
  
  onSubmit(value:any){
    {{debugger}}

    this.anuncio.residuo = value.Residuo;
    this.anuncio.tipoCategoria = parseInt(value.TipoCategoria);
    this.anuncio.tipoNegocio = parseInt(value.TipoNegocio);

    this.service.create(this.anuncio).pipe(first())
    .subscribe({
      
        next: () => {
            this.alertService.success('Registration successful', { keepAfterRouteChange: true });
            alert('Anuncio cadastrado com Sucesso!! :-)\n\n') 
            this.router.navigate(['plataforma'], { relativeTo: this.route });
            {{debugger}}
        },
        error: error => {
            this.alertService.error(error);
            {{debugger}}
        
        }
      });
     
    }
   
    updateAnuncio(value:any) {
      debugger
    this.anuncio.residuo = value.Residuo;
    this.anuncio.tipoCategoria = parseInt(value.TipoCategoria);
    this.anuncio.tipoNegocio = parseInt(value.TipoNegocio);

        this.service.update(this.anuncio)
            .pipe(first())
            .subscribe(() => {
                this.alertService.success('Anuncio updated', { keepAfterRouteChange: true });
                alert('Anuncio Atualizado com Sucesso!! :-)\n\n') 
                this.router.navigate(['plataforma'], { relativeTo: this.route });
         
            });

  }

  resetForm(Form: NgForm){
    Form.reset();
  }
 
}


