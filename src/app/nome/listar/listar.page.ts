import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Nome } from '../entidade/nome';
import * as _ from 'lodash';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {
  [x: string]: any;
  listaNome: Observable<Nome[]>;
  Nome: Observable<{ key: string; }[]>;
  constructor(private fire: AngularFireDatabase) {
    this.Nome = this.fire.list<Nome>('nome').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()
      })))
    );
  }
  ngOnInit() {
  }
filtrar(){
  this.filtro['nome'] = val => val.includes(this.valor);
  this.listaFiltro = _.filter(this.nome, _.conforms(this.filtro));
}

excluir(key){
  this.fire.list<Nome>('nome').remove(key);
}
}
