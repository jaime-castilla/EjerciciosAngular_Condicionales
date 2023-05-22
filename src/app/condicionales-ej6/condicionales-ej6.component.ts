import { Component } from '@angular/core';

@Component({
  selector: 'app-condicionales-ej6',
  templateUrl: './condicionales-ej6.component.html',
  styleUrls: ['./condicionales-ej6.component.css']
})
export class CondicionalesEj6Component {

  numero1: number = 0
  numero2: number = 0

  resultado: string = ""

  calcularResultado(): void{

    if (this.numero1 > this.numero2) {

      this.resultado = `${this.numero1} , ${this.numero2}`
      
    }
    else if (this.numero2 > this.numero1) {

      this.resultado = `${this.numero2} , ${this.numero1}`
      
    }
    else {

      this.resultado = "Los números son iguales."

    }
  }

}
