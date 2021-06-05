import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';

import { error } from 'selenium-webdriver';
import { Anuncio } from '../anuncio';
import { AnunciosService } from '../anuncios.service';
import{ AlertService } from'../../../shared/service/alert.service';
import { first } from 'rxjs/operators';
import { Input } from '@angular/core';
import { __assign } from 'tslib';

@Component({
  selector: 'app-anuncio-form',
  templateUrl: './anuncio-form.component.html',
  styleUrls: ['./anuncio-form.component.css']
})
export class AnuncioformComponent implements OnInit {
  @Input() anuncio: Anuncio = new Anuncio();
  @Input() formEdit: boolean = false;
  index:number = 0;
  imageError: string = '';
  isImageSaved: boolean = false;
  cardImageBase64: string = '';
  foto: string = '';
  ext: string = '';



  constructor(
    private service: AnunciosService,
    private http: HttpClient,
    private form: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,

    ) { }



  residuo =
  {
    tipoNegocio:'',
    tipoCategoria:'',
    residuo:'',
    tipoOrigem: 0,
    tipoUnidade: 0,
    titulo: '',
    detalhes: '',
    quantidade: '',
    recipiente:'',
    frequencia: '',
    solucao:'',
    fotos: '',
    CEP: '',
    rua:'',
    complemento: '',
    bairro: '',
    numero: '',
    cidade: '',
    estado: '',




  };

  ngOnInit(): void {
    console.log(this.index);

    this.route.params.subscribe(
      (params: any) => {
        const id = params ['id'];
        console.log(id);
      }
    )
    if(this.formEdit){
      this.cardImageBase64 = "data:image/jpg;base64," + this.anuncio.fotos;
    }

  }


  next1(){

    this.index = 1;

  }
  next2(){
    this.index = 2
  }
  next3(){
    this.index = 3

  }
  next4(){
    this.index = 4

  }


  onSubmit(value:any){
    {{debugger}}

    value.fotos = this.foto;
    value.ext = this.ext;

    this.service.create(value).pipe(first())
    .subscribe({

        next: () => {
            this.alertService.success('Registration successful', { keepAfterRouteChange: true });
            // alert('Anuncio cadastrado com Sucesso!! :-)\n\n')
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

      value.fotos = this.foto;
      value.ext = this.ext;

        this.service.update(value)
            .pipe(first())
            .subscribe(() => {
                this.alertService.success('Anuncio updated', { keepAfterRouteChange: true });
                alert('Anuncio Atualizado com Sucesso!! :-)\n\n')
                this.router.navigate(['plataforma']);

            });

  }
  onChange(fileInput: any) {

    debugger
    this.imageError = '';
    if (fileInput.target.files && fileInput.target.files[0]) {
        // Size Filter Bytes
        const max_size = 20971520;
        const allowed_types = ['image/png', 'image/jpeg'];
        const max_height = 15200;
        const max_width = 25600;

        if (fileInput.target.files[0].size > max_size) {
            this.imageError =
                'Maximum size allowed is ' + max_size / 1000 + 'Mb';

            return false;
        }

        if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
            this.imageError = 'Only Images are allowed ( JPG | PNG )';
            return false;
        }
        const reader = new FileReader();

        reader.onload = (e: any) => {
            const image = new Image();
            image.src = e.target.result;
            const imgBase64Path = e.target.result;
                    this.cardImageBase64 = imgBase64Path;
                    this.foto = this.cardImageBase64.split('base64,')[1];

                    var values = fileInput.target.files[0].name.split('.');
                    if(values.length > 0){
                      this.ext = values[values.length -1];
                    }
                    this.isImageSaved = true;


        };


        reader.readAsDataURL(fileInput.target.files[0]);

    }
    return;
  }
  resetForm(Form: NgForm){
    Form.reset();
  }



}


