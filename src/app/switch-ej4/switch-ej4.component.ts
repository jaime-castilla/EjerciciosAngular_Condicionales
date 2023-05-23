import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-ej4',
  templateUrl: './switch-ej4.component.html',
  styleUrls: ['./switch-ej4.component.css']
})
export class SwitchEj4Component {

  dia: number = 0
  mes: string =""
  anio: number = 0

  resulDia: string =""
  resulMes: string =""
  resulAnio: string =""

  resultadoFinal: string =""

  validarFecha(): void{

    //Validar el mes (La primera letra en mayúsculas, sino no lo coge y lo da como dato incorrecto)
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


    //Validar el dia
    if (this.resulMes == "Mes correcto") {

      switch (this.mes) {
        case "Enero":
        case "Marzo":
        case "Mayo":
        case "Julio":
        case "Agosto":
        case "Octubre":
        case "Diciembre":
          if (this.dia >= 1 && this.dia <= 31) {
  
            this.resulDia = "Dia correcto"
          }
          else {
            
            this.resulDia = "Dia incorrecto"
          }
          break;
        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":
          if (this.dia >= 1 && this.dia <= 30) {
  
            this.resulDia = "Dia correcto"
          }
          else {

            this.resulDia = "Dia incorrecto"
          }
          break;
        case "Febrero":
          if (this.dia >= 1 && this.dia <= 28) {
  
            this.resulDia = "Dia correcto"
          }
          else {

            this.resulDia = "Dia incorrecto"
          }
          break;
      
        default:
          break;
      }
      
    }
    

    //Validar el año
    if (this.anio >= 1900 && this.anio <= 2200) {

      this.resulAnio = "Año correcto"
    }
    else {
      this.resulAnio = "Año incorrecto"
    }

    //Validar todo, el dia, el mes y el año.
    if (this.resulDia == "Dia correcto" && this.resulMes == "Mes correcto" && this.resulAnio == "Año correcto") {

      this.resultadoFinal = "La fecha introducida es CORRECTA"
    }
    else {
      this.resultadoFinal = "La fecha introducida es INCORRECTA"
    }
  }

}
