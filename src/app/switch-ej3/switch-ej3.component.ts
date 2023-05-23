import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-ej3',
  templateUrl: './switch-ej3.component.html',
  styleUrls: ['./switch-ej3.component.css']
})
export class SwitchEj3Component {

  dia: number = 0
  mes: string =""
  anio: number = 0

  resulDia: string =""
  resulMes: string =""
  resulAnio: string = ""

  resultadoFinal: string =""

  validarFecha(): void{

    //Validar el dia
    if (this.dia >= 1 && this.dia <= 30) {

      this.resulDia = "Dia correcto"
    }
    else {
      this.resulDia = "Dia incorrecto"
    }

    //Validar el mes (La primera letra del mes tiene que ser en mayúscula, sino no validará el mes)
    switch (this.mes) {
      case "Enero":
      case "Febrero":
      case "Marzo":
      case "Abril":
      case "Mayo":
      case "Junio":
      case "Julio":
      case "Agosto":
      case "Septiembre":
      case "Octubre":
      case "Noviembre":
      case "Diciembre":
        this.resulMes = "Mes correcto"
        break;
    
      default:
        this.resulMes = "Mes incorrecto"
        break;
    }

    //Validar el año (Le pongo un intervalo de 1900 a 2200)
    if (this.anio >= 1900 && this.anio <= 2200) {

      this.resulAnio = "Año correcto"
    }
    else {
      this.resulAnio = "Año incorrecto"
    }

    //Validar todo junto, para que coja el dia, el mes y el año todo junto
    if (this.resulDia == "Dia correcto" && this.resulMes == "Mes correcto" && this.resulAnio == "Año correcto") {

      this.resultadoFinal = "La fecha introducida es CORRECTA"
    }
    else {
      this.resultadoFinal = "La fecha introducida es INCORRECTA"
    }

  }

}
