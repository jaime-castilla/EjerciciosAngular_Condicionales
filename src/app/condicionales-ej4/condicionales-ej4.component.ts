import { Component } from '@angular/core';

@Component({
  selector: 'app-condicionales-ej4',
  templateUrl: './condicionales-ej4.component.html',
  styleUrls: ['./condicionales-ej4.component.css']
})
export class CondicionalesEj4Component {

  numero1: number = 0
  numero2: number = 0

  resultado: string =""

  calcularResultado(): void{

    if (this.numero1 % this.numero2 == 0 || this.numero2 % this.numero1 == 0) {

      this.resultado = "Los números introducidos SI son múltiplos uno de otro"
      
    }
    else {

      this.resultado = "Los números introducidos NO son múltiplos uno de otro"

    }
  }

}
