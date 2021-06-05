import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AccountService } from 'src/app/account/shared/account.service';
import { AlertService } from 'src/app/shared/service/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;

    error = '';



  constructor(
    private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService

  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });


  }
   get f() { return this.form.controls; }

  // convenience getter for easy access to form fields




  onSubmit() {
      this.submitted = true;
    {{debugger}}
      // reset alerts on submit
      this.alertService.clear();

      // stop here if form is invalid
      if (this.form.invalid) {
          return console.log(this.f);
      }

      this.loading = true;
      {{debugger}}
      this.accountService.login(this.f.email.value, this.f.senha.value)

          .pipe(first())
          .subscribe(

              data => {
                debugger
                const  returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                  this.router.navigateByUrl(returnUrl);
                  this.accountService.isLogging = true;
                  this.accountService.isLogging$.next(true)
              },
              error => {
                  this.error = error;
                  this.loading = false;
              });



              // next: () => {
              //   debugger
              //     // get return url from query parameters or default to home page
              //     const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
              //     this.router.navigateByUrl(returnUrl);
              //     this.accountService.isLogging = true;
              //     this.accountService.isLogging$.next(true)
              // },
              // error: error => {
              //     this.alertService.error(error);
              //     this.loading = false;
              // }





          {{debugger}}
  }
}
// try{
    //   const result = await this.accountService.login(this.login);
    //   console.log(`Login efetuado: $(result)`);
    //   this.accountService.isLogging = true;
    //   this.accountService.isLogging$.next(true);
    //   // navegar para a rota vazia novamente
    //   this.router.navigate(['plataforma']);
    // } catch (error){
    //   console.error(error);
    // }
