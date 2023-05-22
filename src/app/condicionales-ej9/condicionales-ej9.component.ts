import { Component } from '@angular/core';

@Component({
  selector: 'app-condicionales-ej9',
  templateUrl: './condicionales-ej9.component.html',
  styleUrls: ['./condicionales-ej9.component.css']
})
export class CondicionalesEj9Component {

  numero: number = 0
  unidades: number = 0
  decenas: number = 0
  centenas: number = 0

  resultado: string = ""

  calcularResultado(): void{

    if (this.numero >= 0 && this.numero <= 9999) {

      if (this.numero <= 9) {

        this.resultado = `${this.numero}`
      }
      else if (this.numero >= 10 && this.numero <= 99) {

        this.unidades = this.numero % 10
        this.numero = Math.trunc(this.numero / 10)          //Con el método Math.trunc lo que hace es eliminar la parte decimal y quedarse solo con la parte entera del número.

        this.resultado = `${this.unidades} , ${this.numero}`
      }
      else if (this.numero >= 100 && this.numero <= 999) {

        this.unidades = this.numero % 10
        this.numero = Math.trunc(this.numero / 10)
        this.decenas = this.numero % 10
        this.numero = Math.trunc(this.numero / 10)

        this.resultado = `${this.unidades} , ${this.decenas} , ${this.numero}`
      }
      else {

        this.unidades = this.numero % 10
        this.numero = Math.trunc(this.numero / 10)
        this.decenas = this.numero % 10
        this.numero = Math.trunc(this.numero / 10)
        this.centenas = this.numero % 10
        this.numero = Math.trunc(this.numero / 10)

        this.resultado = `${this.unidades} , ${this.decenas} , ${this.centenas} , ${this.numero}`

      }
      
    }
    else {

      this.resultado = "El número introducido NO ES VÁLIDO."
    }
  }

}
