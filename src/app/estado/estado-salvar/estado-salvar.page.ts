import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Estado } from '../entidade/estado';
@Component({
  selector: 'app-estado-salvar',
  templateUrl: './estado-salvar.page.html',
  styleUrls: ['./estado-salvar.page.scss'],
})
export class EstadoSalvarPage implements OnInit {
  estado: Estado = new Estado();
  constructor(private fire: AngularFireDatabase, private rota: Router) {

  }
  salvar() {
    this.fire.list('estado').push(this.estado);
    this.estado = new Estado();
    this.rota.navigate(['listar-estado']);
  }
  ngOnInit() {
  }

}
