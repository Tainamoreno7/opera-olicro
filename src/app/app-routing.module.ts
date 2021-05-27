import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { ResetComponent } from './view/reset/reset.component';
import { AnuncioformComponent } from './view/anuncio/anuncio-form/anuncio-form.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { AuthGuard } from './account/shared/auth.guard';
import { PerfilComponent} from './view/perfil/perfil.component';

import {AnunciosListaComponent} from'./view/anuncio/anuncios-lista/anuncios-lista.component';
import { from } from 'rxjs';
import { importType } from '@angular/compiler/src/output/output_ast';
import { PlataformaComponent } from './view/plataforma/plataforma.component';


const routes: Routes = [

  { path: '', component:HomeComponent },
  { path: 'plataforma', component:PlataformaComponent },
  { path: 'login', component:LoginComponent },
  
 
  
  {
    path:'',
    component: PerfilComponent,
    children:[ 
     { path: '', redirectTo: 'anuncio', pathMatch: 'full'  },  
      { path: 'anuncio', component:AnuncioformComponent },
      { path: 'perfil', component:PerfilComponent },
      {path: 'residuo', component:AnunciosListaComponent},
      {path: 'editar/:id', component: AnuncioformComponent}
      
     
      
   
      
    ],
    canActivate:[AuthGuard]
    
  },
  {path: '', component:AuthenticationComponent,
  
  children: [
    { path: '', redirectTo: 'login', pathMatch: 'full'  },
        { path: 'login', component:LoginComponent  },
    { path:'cadastro', component:CadastroComponent },
    { path: '', component:HomeComponent }

  
  ]
},

{ path: 'reset', component:ResetComponent }

  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
