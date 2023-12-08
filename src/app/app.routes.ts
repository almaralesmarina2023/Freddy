import { Routes } from '@angular/router';
import { ListarRecetasComponent } from './listar-recetas/listar-recetas.component';
import { RecetasComponent } from './recetas/recetas.component';
import { DetallesRecetasComponent } from './detalles-recetas/detalles-recetas.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
    {path : '', component:ListarRecetasComponent},
    {path : 'Receta', component:RecetasComponent},
    {path : 'Detalles/:id', component:DetallesRecetasComponent},
    {path : 'QuienesSomos', component:QuienesSomosComponent},
    {path : 'Contacto', component:ContactoComponent}
];
