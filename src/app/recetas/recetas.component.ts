import { Component, Input } from '@angular/core';
import { Recetas } from '../listar-recetas/recetas.model';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent {
@Input() Receta_Recibida:Recetas= new Recetas;
@Input() indice:number=0;
}
