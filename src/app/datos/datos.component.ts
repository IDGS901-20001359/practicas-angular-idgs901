import { Component } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent {
  x1!:number;
  x2!:number;
  y1!:number;
  y2!:number;
  resultado!:number;

  calcular(){
    this.resultado=Math.sqrt(Math.pow((this.x1-this.x2), 2) + Math.pow((this.y1 - this.y2), 2));
  }
}
