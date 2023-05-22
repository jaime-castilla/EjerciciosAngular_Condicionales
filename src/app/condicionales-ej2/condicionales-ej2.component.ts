import { Component } from '@angular/core';

@Component({
  selector: 'app-condicionales-ej2',
  templateUrl: './condicionales-ej2.component.html',
  styleUrls: ['./condicionales-ej2.component.css']
})
export class CondicionalesEj2Component {

  numero: number = 0

  resultado: string =""

  calcularResultado(): void{

    if (this.numero >= 0) {

      this.resultado = "El número es POSITIVO."
      
    }
    else {

      this.resultado = "El número es NEGATIVO."
    }
  }

}
