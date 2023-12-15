import { Component, Input } from '@angular/core';
import { Receta } from '../../models/recetas.model';
import { RouterLink } from '@angular/router';

import { ListarRecetasComponent } from '../listar-recetas/listar-recetas.component';


@Component({
  selector: 'app-recetas',
  standalone:true,
  imports: [RouterLink, ListarRecetasComponent],
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
  
})
export class RecetasComponent {
@Input() Receta_Recibida:Receta= new Receta;
@Input() indice:number=0;
}
