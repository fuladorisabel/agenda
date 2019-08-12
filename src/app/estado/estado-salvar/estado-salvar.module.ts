import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EstadoSalvarPage } from './estado-salvar.page';

const routes: Routes = [
  {
    path: '',
    component: EstadoSalvarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EstadoSalvarPage]
})
export class EstadoSalvarPageModule {}
