import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarRecetasComponent } from './listar-recetas/listar-recetas.component';
import { RecetasComponent } from './recetas/recetas.component';
import { DetallesRecetasComponent } from './detalles-recetas/detalles-recetas.component';
import { RouterModule, Routes } from '@angular/router';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactoComponent } from './contacto/contacto.component';



const appRoutes:Routes = [
  {path : '', component:ListarRecetasComponent},
  {path : 'Receta', component:RecetasComponent},
  {path : 'Detalles', component:DetallesRecetasComponent},
  {path : 'QuienesSomos', component:QuienesSomosComponent},
  {path : 'Contacto', component:ContactoComponent}
  
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
