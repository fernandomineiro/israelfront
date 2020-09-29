import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckdiarioComponent } from './checkdiario/checkdiario.component';
import { ChecksemanalComponent } from './checksemanal/checksemanal.component';
import { InicialComponent } from './inicial/inicial.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EmpresaspagadorasComponent } from './empresaspagadoras/empresaspagadoras.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { IndexComponent } from './index/index.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
    { path: 'checkdiario', component: CheckdiarioComponent },
    { path: 'checksemanal', component: ChecksemanalComponent },
    { path: '', component: IndexComponent },
    { path: 'empresas', component: EmpresaspagadorasComponent },
    { path: 'inicial', component: InicialComponent },
    { path: 'perfil', component: PerfilComponent },
    { path: 'restaurante', component: RestauranteComponent },
    { path: 'usuario', component: UsuarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
