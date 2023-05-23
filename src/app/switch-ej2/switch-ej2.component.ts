import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-ej2',
  templateUrl: './switch-ej2.component.html',
  styleUrls: ['./switch-ej2.component.css']
})
export class SwitchEj2Component {

  nota: number = 0

  resultado: string =""

  mostrarNota(): void{

    if (this.nota >= 0 && this.nota <= 10) {

      switch (this.nota) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
          this.resultado = "Insuficiente"
          break;
        case 5:
          this.resultado = "Suficiente"
          break;
        case 6:
          this.resultado = "Bien"
          break;
        case 7:
        case 8:
          this.resultado = "Notable"
          break;
        case 9:
        case 10:
          this.resultado = "Sobresaliente"
          break;
      
        default:
          break;
      }
    }
    else {

      this.resultado = "El dato introducido NO ES VÁLIDO"
    }
  }

}
