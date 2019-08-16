import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.page.html',
  styleUrls: ['./pagina.page.scss'],
})
export class PaginaPage implements OnInit {
  ngOnInit() {
  }
  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['home']);
  }
}
