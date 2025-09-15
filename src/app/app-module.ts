import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuSuperior } from './menu-superior/menu-superior';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalculoMedia } from './calculo-media/calculo-media';
import { ApoliceSeguro } from './apolice-seguro/apolice-seguro';
import { ConversorTemp } from './conversor-temp/conversor-temp';
import { CalculadoraImc } from './calculadora-imc/calculadora-imc';
import { Home } from './home/home';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    MenuSuperior,
    CalculoMedia,
    ApoliceSeguro,
    ConversorTemp,
    CalculadoraImc,
    Home
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
