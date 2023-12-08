import { Component, Input } from '@angular/core';
import { Recetas } from '../listar-recetas/recetas.model';
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
@Input() Receta_Recibida:Recetas= new Recetas;
@Input() indice:number=0;
}
