import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BandasderesistenciaComponent } from '../bandasderesistencia/bandasderesistencia.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BandasderesistenciaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    BandasderesistenciaComponent
  ]
})
export class ResistenciaModule { }
