import { Component } from '@angular/core';

@Component({
  selector: 'app-condicionales-ej5',
  templateUrl: './condicionales-ej5.component.html',
  styleUrls: ['./condicionales-ej5.component.css']
})
export class CondicionalesEj5Component {

  numero1: number = 0
  numero2: number = 0

  resultado: string =""

  calcularResultado(): void{

    if (this.numero1 > this.numero2) {

      this.resultado = `El número ${this.numero1} es mayor que el número ${this.numero2}.`
      
    }
    else if (this.numero2 > this.numero1) {

      this.resultado = `El número ${this.numero2} es mayor que el número ${this.numero1}.`
      
    }
    else {

      this.resultado = "Los números son iguales."
      
    }
  }

}
