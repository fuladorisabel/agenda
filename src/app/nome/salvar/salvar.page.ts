import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router'
import { Nome } from '../entidade/nome';
@Component({
  selector: 'app-salvar',
  templateUrl: './salvar.page.html',
  styleUrls: ['./salvar.page.scss'],
})
export class SalvarPage implements OnInit {
  Nome: Nome = new Nome();
  constructor(private fire: AngularFireDatabase, private rota: Router) {

  }
  salvar() {
    this.fire.list('nome').push(this.Nome.nome);
    this.Nome = new Nome();
    this.rota.navigate(['listar']);
  }
  ngOnInit() {
  }

}
