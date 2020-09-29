import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckdiarioComponent } from './checkdiario/checkdiario.component';
import { ChecksemanalComponent } from './checksemanal/checksemanal.component';
import { EmpresaspagadorasComponent } from './empresaspagadoras/empresaspagadoras.component';
import { InicialComponent } from './inicial/inicial.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { IndexComponent } from './index/index.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CheckdiarioComponent,
    ChecksemanalComponent,
    EmpresaspagadorasComponent,
    InicialComponent,
    PerfilComponent,
    RestauranteComponent,
    IndexComponent,
    UsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
