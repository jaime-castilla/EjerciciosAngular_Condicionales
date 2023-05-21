import { Component } from '@angular/core';

@Component({
  selector: 'app-condicionales-ej1',
  templateUrl: './condicionales-ej1.component.html',
  styleUrls: ['./condicionales-ej1.component.css']
})
export class CondicionalesEj1Component {

  numero1: string =""
  numero2: string = ""

  resultado: string = ""
   
  calcularResultado(): void{

    if (this.numero1 == this.numero2) {

      this.resultado = "Los numeros son IGUALES"
      
    } 
    else {

      this.resultado = "Los números son DISTINTOS"
    }
  }

}
