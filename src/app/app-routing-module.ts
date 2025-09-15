import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculoMedia } from './calculo-media/calculo-media';
import { ConversorTemp } from './conversor-temp/conversor-temp';
import { CalculadoraImc } from './calculadora-imc/calculadora-imc';
import { ApoliceSeguro } from './apolice-seguro/apolice-seguro';
import { Home } from './home/home';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'calculadora-media', component: CalculoMedia},
  { path: 'conversor-temp', component: ConversorTemp},
  { path: 'calculadora-imc', component: CalculadoraImc},
  { path: 'apolice-seguro', component: ApoliceSeguro},
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
