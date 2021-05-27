import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { CarouselModule }  from  'ngx-owl-carousel-o';
import { HomeComponent } from './view/home/home.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { LoginComponent } from './view/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import { ResetComponent } from './view/reset/reset.component';
import { AnuncioformComponent } from './view/anuncio/anuncio-form/anuncio-form.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { PerfilComponent } from './view/perfil/perfil.component';
import {MatMenuModule} from '@angular/material/menu';
import { AnunciosListaComponent } from './view/anuncio/anuncios-lista/anuncios-lista.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginModule } from './view/login/login.module';
import { PlataformaComponent } from './view/plataforma/plataforma.component';

import { AlertComponent } from './components/alert/alert.component';
import { JwtInterceptor } from './account/_helpers/jwt.interceptor';
import { ErrorInterceptor } from './account/_helpers/error.interceptor';
import { fakeBackendProvider } from './account/_helpers/fake-backend';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CadastroComponent,
    LoginComponent,
    ResetComponent,
    AnuncioformComponent,
    AuthenticationComponent,
    PerfilComponent,
    AnunciosListaComponent,
    PlataformaComponent,
    AlertComponent,

        

    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    TooltipModule,
    NgxNavbarModule,
    CarouselModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatExpansionModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatMenuModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    FlexLayoutModule,
    LoginModule,
    RouterModule,
    CommonModule

  
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  

}
