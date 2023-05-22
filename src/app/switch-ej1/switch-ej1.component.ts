import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-ej1',
  templateUrl: './switch-ej1.component.html',
  styleUrls: ['./switch-ej1.component.css']
})
export class SwitchEj1Component {

  estadoCivil: string = ""

  resultado: string = ""

  sacarResultado(): void{

    switch (this.estadoCivil.toUpperCase()) {     //El método .toUpperCase convierte las letras introducidas en mayúsculas. En este caso sirve para que coja el valor introducido sea en mayúsculas o en minúsculas.
      case "C":
        this.resultado = "Casado"
        break;
      case "D":
        this.resultado = "Divorciado"
        break;
      case "S":
        this.resultado = "Soltero"
        break;
      case "V":
        this.resultado = "Viudo"
        break;
    
      default:
        this.resultado = "Dato introducido NO VÁLIDO"
        break;
    }
  }

}
