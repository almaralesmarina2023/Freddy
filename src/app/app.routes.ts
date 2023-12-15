import { Routes } from '@angular/router';
import { ListarRecetasComponent } from './components/listar-recetas/listar-recetas.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { DetallesRecetasComponent } from './components/detalles-recetas/detalles-recetas.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AdicionarRecetaComponent } from './components/adicionar-receta/adicionar-receta.component';
import { ModificarRecetaComponent } from './components/modificar-receta/modificar-receta.component';
import { CLauncherComponent } from './components/c-launcher/c-launcher.component';

export const routes: Routes = [
    {path : '', component:CLauncherComponent},
    {path:'Listado',component:ListarRecetasComponent},
    {path : 'Receta', component:RecetasComponent},
    {path : 'Detalles/:id', component:DetallesRecetasComponent},
    {path : 'QuienesSomos', component:QuienesSomosComponent},
    {path : 'Contacto', component:ContactoComponent},
    {path: 'AgregarReceta', component:AdicionarRecetaComponent},
    {path: 'Modificar/:id', component:ModificarRecetaComponent}
];
