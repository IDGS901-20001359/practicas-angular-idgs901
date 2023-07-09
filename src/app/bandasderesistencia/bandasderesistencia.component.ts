import { Component } from '@angular/core';

@Component({
  selector: 'app-bandasderesistencia',
  templateUrl: './bandasderesistencia.component.html',
  styleUrls: ['./bandasderesistencia.component.css']
})
export class BandasderesistenciaComponent {
  banda1Color!:number ;
  banda2Color!:number ;
  banda3Color!:number ;
  banda1!:string;
  banda2!:string;
  banda3!:string;
  multiplicador!:number ;
  tolerancia: string = '';
  toleranciaColor: string = '';
  minimo!:number;
  maximo!:number; 
  resistencia: number | null = null;
  toleranciaValor: number | null = null;
  resultado:any=[];
  banda1Valor!:number;

  listResistencia:any=[];

  calcularResistencia(){
    const coloresBanda : { [key: number]: string }  = {
      0: 'negro',
      1: 'marron',
      2: 'rojo',
      3:'naranja',
      4:'amarillo',
      5:'verde',
      6:'azul',
      7:'violeta',
      8:'gris',
      9:'blanco'

    };
    const coloresBanda2: { [key: string]: number } = {
      negro:0,
      marron:1,
      rojo:2,
      naranja:3,
      amarillo:4,
      verde:5,
      azul:6,
      violeta:7,
      gris:8,
      blanco:9
    };

    const colores =  ['black', 'chocolate', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'gray', 'white']

    const tolerancias: { [key: string]: number } = {
      oro: 5,
      plata: 10
    };

    this.banda1Valor = coloresBanda2[coloresBanda[this.banda1Color]];
    const banda2Valor = coloresBanda2[coloresBanda[this.banda2Color]];
    const banda3Valor = coloresBanda2[coloresBanda[this.multiplicador]];
    const multiplicadorValor = Math.pow(10, this.multiplicador);


    this.resistencia = (Number(this.banda1Valor) * 10 + banda2Valor) * multiplicadorValor;
    this.toleranciaValor = tolerancias[this.tolerancia.toLowerCase()];

    if (this.tolerancia == 'oro'){
      this.minimo = this.resistencia - (this.resistencia * 0.05)
      this.maximo = this.resistencia + (this.resistencia * 0.05)
    }
    else{
      this.minimo = this.resistencia - (this.resistencia * 0.1)
      this.maximo = this.resistencia + (this.resistencia * 0.1)
    }

    
    const valores = {
      'banda1Valor' : this.banda1Valor,
      'banda2' : banda2Valor,
      'multiplicador' : multiplicadorValor,
      'minimo' : this.minimo,
      'maximo' : this.maximo
    }
    
    this.banda1 = colores[Number(this.banda1Valor)];
    this.banda2 = colores[Number(banda2Valor)];
    this.banda3 = colores[Number(banda3Valor)]
    if(this.toleranciaValor == 10){
      this.toleranciaColor = 'silver';
    }else{
      this.toleranciaColor = 'gold';
    }
    //this.listResistencia.append(valores);
    this.resultado=this.listResistencia;
  }
}
