import { Component } from '@angular/core';

@Component({
  selector: 'app-condicionales-ej3',
  templateUrl: './condicionales-ej3.component.html',
  styleUrls: ['./condicionales-ej3.component.css']
})
export class CondicionalesEj3Component {

  numero: number = 0

  resultado: string =""

  calcularResultado(): void{

    if (this.numero % 2 == 0) {

      this.resultado = "El número introducido es PAR."
      
    }
    else {

      this.resultado = "El número introducido es IMPAR."
    }
  }

}
