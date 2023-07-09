import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DistanciaModule } from './distancia/distancia.module';
import { BandasderesistenciaComponent } from './bandasderesistencia/bandasderesistencia.component';
import { PizzeriaComponent } from './pizzeria/pizzeria.component';
import { CinepolisComponent } from './cinepolis/cinepolis.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BandasderesistenciaComponent,
    PizzeriaComponent,
    CinepolisComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    DistanciaModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
