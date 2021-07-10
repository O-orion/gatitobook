import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full', //tira os espaço
    redirectTo: 'home'
  },
  {
    path: 'home', //ROTA
    loadChildren: ()=> import('./home/home.module').then((m) => m.HomeModule) // quando usuario acessa aquela rota vai chama esse modulo
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
