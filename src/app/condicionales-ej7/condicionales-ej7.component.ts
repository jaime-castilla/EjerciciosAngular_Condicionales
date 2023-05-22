import { Component } from '@angular/core';

@Component({
  selector: 'app-condicionales-ej7',
  templateUrl: './condicionales-ej7.component.html',
  styleUrls: ['./condicionales-ej7.component.css']
})
export class CondicionalesEj7Component {

  numero1: number = 0
  numero2: number = 0
  numero3: number = 0

  resultado: string =""

  calcularResultado(): void{

    if (this.numero1 > this.numero2 && this.numero2 > this.numero3) {

      this.resultado = `${this.numero1} , ${this.numero2} , ${this.numero3}`
    }
    else if (this.numero1 > this.numero3 && this.numero3 > this.numero2) {

      this.resultado = `${this.numero1} , ${this.numero3} , ${this.numero2}`
    }
    else if (this.numero2 > this.numero1 && this.numero1 > this.numero3) {

      this.resultado = `${this.numero2} , ${this.numero1} , ${this.numero3}`
    }
    else if (this.numero2 > this.numero3 && this.numero3 > this.numero1) {

      this.resultado = `${this.numero2} , ${this.numero3} , ${this.numero1}`
    }
    else if (this.numero3 > this.numero1 && this.numero1 > this.numero2) {

      this.resultado = `${this.numero3} , ${this.numero1} , ${this.numero2}`
    }
    else {

      this.resultado = `${this.numero3} , ${this.numero2} , ${this.numero1}`
    }
  }

}
