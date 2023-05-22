import { Component } from '@angular/core';

@Component({
  selector: 'app-condicionales-ej8',
  templateUrl: './condicionales-ej8.component.html',
  styleUrls: ['./condicionales-ej8.component.css']
})
export class CondicionalesEj8Component {

  numero: number = 0

  resultado: string =""

  calcularResultado(): void{

    if (this.numero >= 0 && this.numero <= 9999) {

      if (this.numero >= 0 && this.numero <= 9) {

        this.resultado = "El número introducido tiene UNA cifra."
      }
      else if (this.numero >= 10 && this.numero <= 99) {

        this.resultado = "El número introducido tiene DOS cifras."
      }
      else if (this.numero >= 100 && this.numero <= 999) {

        this.resultado = "El número introducido tiene TRES cifras."
      }
      else {

        this.resultado = "El número introducido tiene CUATRO cifras."
      }
    }
    else {

      this.resultado = "El número introducido NO ES VÁLIDO"
    }
  }

}
