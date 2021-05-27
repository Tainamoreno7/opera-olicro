import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, NG_VALIDATORS, PatternValidator, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { User } from '../../shared/model/user';
import { take, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { variable } from '@angular/compiler/src/output/output_ast';
import { CadastroService } from './cadastro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/shared/service/alert.service';
import { AccountService } from 'src/app/account/shared/account.service';





@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  submitted = false;
  form!: FormGroup;
   

  constructor( 
    private fb: FormBuilder,
    private http: HttpClient,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private accountService: AccountService,
    private router: Router
    //private service: CadastroService,
    
    ){
   }

  get f() { return this.cadastro.controls; }

  cadastro = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
     sobrenome:['', [Validators.required]],
     pais: ['', [Validators.required]],
     whatsapp: ['' ,[Validators.required, Validators.pattern(/^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$/)]],
     email: ['', [Validators.required,  Validators.email]],
     senha: ['', [Validators.required, Validators.minLength(6), Validators.nullValidator]],
     confirmeSenha:['', [Validators.required, Validators.nullValidator] ],
     termos:[false, [Validators.requiredTrue]],
     
},{
validator: MustMatch('senha', 'confirmeSenha')
});
ngOnInit(): void { }
  
onSubmit() {

  
  this.submitted = true;
  this.alertService.clear();
  if (this.cadastro.invalid) {
    return;
}
        {{debugger}}
        this.accountService.register(this.cadastro.value)
            .pipe(take(1))
            .subscribe({
                next: () => {
                    this.alertService.success('Registration successful', { keepAfterRouteChange: true });
                    alert('Cadastro Realizado com Sucesso!! :-)\n\n') 
                    this.router.navigate(['login'], { relativeTo: this.route });
                },
                error: error => {
                    this.alertService.error(error);
                    
                }
            });


// this.service.create(this.cadastro.getRawValue()).subscribe((data: 
//   {}) => {
//         this.router.navigate(['login'])
//       })
//       alert('Cadastro Realizado com Sucesso!! :-)\n\n') 
  
  //  JSON.stringify(this.cadastro.getRawValue()))

 

  
    

  // this.http.post('http://httpbin.org/post', JSON.stringify(this.cadastro.value)).pipe(take(1))
  // .subscribe(dados => {
  //    console.log(dados)
    
 // exibir valores de formulário em sucesso exibir valores de formulário em caso de sucesso
  
 
 
 //resertar formulario
    // this.resetar();

    // },(error:any) => alert('erro'));
    

    

}

resetar(){
  this.cadastro.reset();
}



  // static equalsTO(otherField: string){
  //   const validator = (formControl: FormControl) =>{
  //     if(otherField == null){
  //       throw new Error ('É Nessário informar um campo.');
  //     }

  //     const field = (<FormGroup>formControl.root).get(otherField);
      
  //     if (!field){
  //       throw new Error ('É necessário informar um campo valido.')
  //     }

  //     if (field.value !== formControl.value){
  //       return{
  //         equalsTO:otherField
  //       };

  //       return null;
  //     };
  //   return validator;
  //   }
    

}
//Função para comprar senha
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // retorna se outro validador  se já encontrou um erro no controle correspondente
          return;
      }

      // definir erro na correspondência de controle se a validação falhar
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}
