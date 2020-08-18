//Aquí se especifican que componentes y servicios tiene nuestro proyecto.

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Para que un componente pueda ser declarado y así ser usado, se necesita importar 
//pero para que pueda hacerse referencia desde el app.module, la clase debe ser "export class"
import {HeaderComponent} from './components/header/header.components';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
