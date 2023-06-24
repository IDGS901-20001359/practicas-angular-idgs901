import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DistanciaModule } from './distancia/distancia.module';
import { BandasderesistenciaComponent } from './bandasderesistencia/bandasderesistencia.component';

@NgModule({
  declarations: [
    AppComponent,
    BandasderesistenciaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    DistanciaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
