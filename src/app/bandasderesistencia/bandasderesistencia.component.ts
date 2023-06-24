import { Component } from '@angular/core';

@Component({
  selector: 'app-bandasderesistencia',
  templateUrl: './bandasderesistencia.component.html',
  styleUrls: ['./bandasderesistencia.component.css']
})
export class BandasderesistenciaComponent {
  banda1Color: string = '';
  banda2Color: string = '';
  multiplicador: string = '';
  tolerancia: string = '';
  resistencia: number | null = null;
  toleranciaValor: number | null = null;

  calcularResistencia(){
    const coloresBanda: { [key: string]: number } = {
      negro: 0,
      marrón: 1,
      rojo: 2,
      naranja: 3,
      amarillo: 4,
      verde: 5,
      azul: 6,
      violeta: 7,
      gris: 8,
      blanco: 9

    };

    const tolerancias: { [key: string]: number } = {
      oro: 5,
      plata: 10
    };

    const banda1Valor = coloresBanda[this.banda1Color.toLowerCase()];
    const banda2Valor = coloresBanda[this.banda2Color.toLowerCase()];
    const multiplicadorValor = Math.pow(10, coloresBanda[this.multiplicador.toLowerCase()]);
    /* 
      negro: 1,
      marrón: 10,
      rojo: 100,
      naranja: 1000,
      amarillo: 10000,
      verde: 100000,
      azul: 1000000,
      violeta: 10000000,
      gris: 100000000,
      blanco: 1000000000
    }; */

    this.resistencia = (banda1Valor * 10 + banda2Valor) * multiplicadorValor;
    this.toleranciaValor = tolerancias[this.tolerancia.toLowerCase()];
    
  }
}
