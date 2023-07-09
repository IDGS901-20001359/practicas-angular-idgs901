import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { BandasderesistenciaComponent } from "./bandasderesistencia/bandasderesistencia.component";
import { CinepolisComponent } from "./cinepolis/cinepolis.component";
import { PizzeriaComponent } from "./pizzeria/pizzeria.component";
import { DatosComponent } from "./datos/datos.component";

const routes:Routes=[
    {path: 'DatosComponent', component: DatosComponent},
    {path: 'BandasderesistenciaComponent', component: BandasderesistenciaComponent},
    {path: 'CinepolisComponent', component: CinepolisComponent},
    {path: 'PizzeriaComponent', component: PizzeriaComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}