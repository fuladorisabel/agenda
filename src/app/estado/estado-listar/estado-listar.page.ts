import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Estado } from '../entidade/estado';

@Component({
  selector: 'app-estado-listar',
  templateUrl: './estado-listar.page.html',
  styleUrls: ['./estado-listar.page.scss'],
})
export class EstadoListarPage implements OnInit{
  listaEstado: Observable<Estado[]>;
  Estado: Observable<{ key: string; }[]>;
constructor(private fire: AngularFireDatabase) {
this.Estado = this.fire.list<Estado>('estado').snapshotChanges().pipe(
  map(lista => lista.map(linha => ({
    key: linha.payload.key, ...linha.payload.val()
      })))
      );
  }
  ngOnInit() {
  }
 }
