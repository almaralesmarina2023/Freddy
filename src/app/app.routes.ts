import { Routes } from '@angular/router';
import { ListarRecetasComponent } from './listar-recetas/listar-recetas.component';
import { RecetasComponent } from './recetas/recetas.component';
import { DetallesRecetasComponent } from './detalles-recetas/detalles-recetas.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AdicionarRecetaComponent } from './adicionar-receta/adicionar-receta.component';
import { ModificarRecetaComponent } from './modificar-receta/modificar-receta.component';

export const routes: Routes = [
    {path : '', component:ListarRecetasComponent},
    {path : 'Receta', component:RecetasComponent},
    {path : 'Detalles/:id', component:DetallesRecetasComponent},
    {path : 'QuienesSomos', component:QuienesSomosComponent},
    {path : 'Contacto', component:ContactoComponent},
    {path: 'AgregarReceta', component:AdicionarRecetaComponent},
    {path: 'Modificar/:id', component:ModificarRecetaComponent}
];
