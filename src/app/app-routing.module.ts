import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'pagina', loadChildren: './pagina/pagina.module#PaginaPageModule' },
  { path: 'nova', loadChildren: './nova/nova.module#NovaPageModule' },
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
   { path: 'cidade-salvar', loadChildren: './cidade/cidade-salvar/cidade-salvar.module#CidadeSalvarPageModule' },
  { path: 'cidade-listar', loadChildren: './cidade/cidade-listar/cidade-listar.module#CidadeListarPageModule' },
  { path: 'salvar', loadChildren: './nome/salvar/salvar.module#SalvarPageModule' },
  { path: 'listar', loadChildren: './nome/listar/listar.module#ListarPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
