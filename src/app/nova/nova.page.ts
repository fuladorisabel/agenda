import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova',
  templateUrl: './nova.page.html',
  styleUrls: ['./nova.page.scss'],
})
export class NovaPage implements OnInit {
  [x: string]: any;

  constructor() {
  this.afAuth.auth.sendPasswordResetEmail(this.usuario.email); }

  ngOnInit() {
  }

validar(){

}
}
