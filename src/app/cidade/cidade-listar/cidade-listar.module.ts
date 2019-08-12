import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CidadeListarPage } from './cidade-listar.page';

const routes: Routes = [
  {
    path: '',
    component: CidadeListarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CidadeListarPage]
})
export class CidadeListarPageModule {}
