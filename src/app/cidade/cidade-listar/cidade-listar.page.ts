import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Cidade } from '../entidade/cidade';
@Component({
  selector: 'app-cidade-listar',
  templateUrl: './cidade-listar.page.html',
  styleUrls: ['./cidade-listar.page.scss'],
})
export class CidadeListarPage implements OnInit {

  listaCidade: Observable<Cidade[]>;
  Cidade: Observable<{ key: string; }[]>;

  constructor(private fire: AngularFireDatabase) {
    this.Cidade = this.fire.list<Cidade>('cidade').snapshotChanges().pipe(//busca
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()// seja formatado pela chave e pelo valor
      })))
    );//ira guardar esses contatos(lista), o fire tem os metodos necessarios para listar, e converter os dados para contato, configurando ela em linha(chave)

  }
  ngOnInit() {
  }
  //<ion-item *ngFor = "let contato of listaContatos | async"> serve para percorrer a lista de contatos
  }
