import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { TablaUsuariosComponent } from './pages/tabla-usuarios/tabla-usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosService } from './services/usuarios.service';


@NgModule({
  declarations: [
    TablaUsuariosComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    HttpClientModule
  ],
  exports: [
    TablaUsuariosComponent,
  ],
  providers:[
    UsuariosService
  ]
})
export class UsuariosModule { }
