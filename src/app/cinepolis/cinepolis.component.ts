import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  cineForm!: FormGroup;
  nombre: string = '';
  numPersonas !: number;
  numBoletos !: number;
  pagoTarjeta: string = '';
  max !: number;
  resp: string = '';
  subTotal !: number;
  

  message!:string;
  alert!:string;

  constructor(private readonly fb: FormBuilder) {
    this.cineForm = this.initForm();
  }

  onSubmit(): void {
    //console.log('Form ->', this.alumnoForm.value);
    this.obtenerDatos();
  }

  obtenerDatos(): void {
    this.nombre = this.cineForm.get('nombre')?.value;
    this.numPersonas = this.cineForm.get('numPersonas')?.value;
    this.numBoletos = this.cineForm.get('numBoletos')?.value;
    this.pagoTarjeta = this.cineForm.get('pagoTarjeta')?.value;
  }

  initForm(): FormGroup {
    //definiendo todos los campos que se utilizaran para el formulario
    return this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      numPersonas: ['', [Validators.required, Validators.minLength(7)]],
      numBoletos: ['', [Validators.required]],
      pagoTarjeta: [false]
    })
  }

  calcularBoleto() {
    this.obtenerDatos();

    let total = 0;
    let desc = 0;

    if (this.numBoletos > 5) {
      desc = 0.15;
    } else if (this.numBoletos >= 3) {
      desc = 0.10;
    } else {
      desc = 0; 
    }
      
    if(!(this.numBoletos > (this.numPersonas * 7))){
      total = (this.numBoletos*12) - ((this.numBoletos*12)*desc);

      if(this.pagoTarjeta == 'si' ){
        total = total - (total * 0.10);
      }
      else{
        total = total;
      }

      this.message="La venta a pagar de "+this.nombre+" es de "+total;
      this.cineForm = this.initForm();
      }else{
        this.message = "Solo se pueden comprar 7 boletos por persona";
    }
  }
}