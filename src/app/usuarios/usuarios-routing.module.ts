import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaUsuariosComponent } from './pages/tabla-usuarios/tabla-usuarios.component';

const routes: Routes = [
  {
    path: '', component: TablaUsuariosComponent
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
