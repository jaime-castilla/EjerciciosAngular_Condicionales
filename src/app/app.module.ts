import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CondicionalesEj1Component } from './condicionales-ej1/condicionales-ej1.component';
import { CondicionalesEj2Component } from './condicionales-ej2/condicionales-ej2.component';
import { CondicionalesEj3Component } from './condicionales-ej3/condicionales-ej3.component';
import { CondicionalesEj4Component } from './condicionales-ej4/condicionales-ej4.component';
import { CondicionalesEj5Component } from './condicionales-ej5/condicionales-ej5.component';
import { CondicionalesEj6Component } from './condicionales-ej6/condicionales-ej6.component';
import { CondicionalesEj7Component } from './condicionales-ej7/condicionales-ej7.component';
import { CondicionalesEj8Component } from './condicionales-ej8/condicionales-ej8.component';
import { CondicionalesEj9Component } from './condicionales-ej9/condicionales-ej9.component';
import { SwitchEj1Component } from './switch-ej1/switch-ej1.component';
import { SwitchEj2Component } from './switch-ej2/switch-ej2.component';
import { SwitchEj3Component } from './switch-ej3/switch-ej3.component';
import { SwitchEj4Component } from './switch-ej4/switch-ej4.component';

@NgModule({
  declarations: [
    AppComponent,
    CondicionalesEj1Component,
    CondicionalesEj2Component,
    CondicionalesEj3Component,
    CondicionalesEj4Component,
    CondicionalesEj5Component,
    CondicionalesEj6Component,
    CondicionalesEj7Component,
    CondicionalesEj8Component,
    CondicionalesEj9Component,
    SwitchEj1Component,
    SwitchEj2Component,
    SwitchEj3Component,
    SwitchEj4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
