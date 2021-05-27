import { importType } from '@angular/compiler/src/output/output_ast';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnunciosListaComponent } from './anuncios-lista/anuncios-lista.component';
import { AnuncioformComponent} from './anuncio-form/anuncio-form.component';

const routes: Routes = [
  {
    path: '', component: AnunciosListaComponent
  },
  {path: 'anuncio', component:AnuncioformComponent},
  {path: 'residuo', component:AnunciosListaComponent},
  {path: 'editar/:id', component:AnuncioformComponent}
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnuncioRoutingModule { }
