import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCategoriasComponent } from './categorias/lista-categorias/lista-categorias.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ListaProductosComponent } from './productos/lista-productos/lista-productos.component';

const routes: Routes = [
  {
    path:"login",component: LoginComponent
  },
  {
    path:"",component: MainComponent,
    children:[
      {
        path:"productos",component:ListaProductosComponent
      },
      {path:"categorias",component: ListaCategoriasComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
