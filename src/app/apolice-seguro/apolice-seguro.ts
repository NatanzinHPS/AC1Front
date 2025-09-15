import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice-seguro',
  standalone: false,
  templateUrl: './apolice-seguro.html',
  styleUrl: './apolice-seguro.css'
})
export class ApoliceSeguro {
  nome: string = '';
  sexo: string = 'M'; // M = Masculino, F = Feminino
  idade: number = 0;
  valorAutomovel: number = 0;

  valorApolice: number = 0;

  calcularApolice() {
    if (this.sexo === 'M') {
      if (this.idade <= 25) {
        this.valorApolice = this.valorAutomovel * 0.15;
      } else {
        this.valorApolice = this.valorAutomovel * 0.10;
      }
    } else if (this.sexo === 'F') {
      this.valorApolice = this.valorAutomovel * 0.08;
    }
  }
}
