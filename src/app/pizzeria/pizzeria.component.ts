import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-pizzeria',
  templateUrl: './pizzeria.component.html',
  styleUrls: ['./pizzeria.component.css']
})
export class PizzeriaComponent {
  pizzaForm: FormGroup;
  registrosPizzas: any[] = [];
  subtotalVentasTerminadas: { nombre: string, subtotal: number, total: number }[] = [];
  totalVentas: number = 0;
  ingredientes: string[] = [];

  constructor(private readonly fb: FormBuilder) {
    this.pizzaForm = this.initForm();
  }

  onSubmit(): void {
    this.obtenerDatos();
  }

  obtenerDatos(): void {
    const nombre = this.pizzaForm.get('nombre')?.value;
    const num = this.pizzaForm.get('num')?.value;
    const tamanio = this.pizzaForm.get('tamanio')?.value;

    let sub = 0;

    if (tamanio === 'Chica') {
      sub = 40 * num;
    } else if (tamanio === 'Mediana') {
      sub = 80 * num;
    } else {
      sub = 120 * num;
    }

    const ingredientesSeleccionados = this.obtenerIngredientesSeleccionados();
    ingredientesSeleccionados.forEach((ingrediente) => {
      sub += 10;
      this.ingredientes.push(ingrediente);
    });

    this.registrosPizzas.push({
      nombre: nombre,
      tamanio: tamanio,
      ingredientes: ingredientesSeleccionados,
      num: num,
      subtotal: sub
    });
  }

  obtenerIngredientesSeleccionados(): string[] {
    const ingredientesSeleccionados: string[] = [];
    if (this.pizzaForm.get('Jamon')?.value) {
      ingredientesSeleccionados.push('Jamón');
    }
    if (this.pizzaForm.get('Pina')?.value) {
      ingredientesSeleccionados.push('Piña');
    }
    if (this.pizzaForm.get('Champinones')?.value) {
      ingredientesSeleccionados.push('Champiñones');
    }
    return ingredientesSeleccionados;
  }

  eliminarUltimoRegistro(): void {
    this.registrosPizzas.pop();
  }

  eliminarRegistros(): void {
    this.registrosPizzas = [];
  }

  agregarSubtotal(): void {
    this.registrosPizzas.forEach((pizza) => {
      const subtotal = pizza.subtotal;
      const nombre = pizza.nombre;
      let total = this.totalVentas;
      total += subtotal;
      this.subtotalVentasTerminadas.push({ nombre, subtotal, total });
      this.totalVentas += subtotal;
    });

    this.eliminarRegistros();
  }

  initForm(): FormGroup {
    return this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      direccion: ['', [Validators.required, Validators.minLength(3)]],
      telefono: ['', [Validators.required, Validators.minLength(8)]],
      tamanio: ['', [Validators.required]],
      Jamon: [''],
      Pina: [''],
      Champinones: [''],
      num: ['', [Validators.required, Validators.minLength(1)]]
    });
  }
}