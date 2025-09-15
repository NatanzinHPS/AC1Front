import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor-temp',
  standalone: false,
  templateUrl: './conversor-temp.html',
  styleUrl: './conversor-temp.css'
})
export class ConversorTemp {
  celsius: number = 0;
  fahrenheit: number = 0;
  kelvin: number = 0;

  converter() {
    this.fahrenheit = (this.celsius * 9/5) + 32;
    this.kelvin = this.celsius + 273.15;
  }
}
