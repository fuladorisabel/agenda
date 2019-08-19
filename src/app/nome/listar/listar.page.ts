import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Nome } from '../entidade/nome';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit{
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
 }
