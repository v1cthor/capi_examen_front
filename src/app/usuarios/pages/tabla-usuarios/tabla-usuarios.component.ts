import { Component } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuarios } from '../../interfaces/usuarios';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrl: './tabla-usuarios.component.scss'
})
export class TablaUsuariosComponent {
  constructor(private usuariosservice: UsuariosService) {
  }

  data!: Usuarios[];

  ngOnInit(): void {
    this.usuariosservice.getUsuarios().subscribe({
      next: (response: Usuarios[]) => {
        this.data = response;
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

}
