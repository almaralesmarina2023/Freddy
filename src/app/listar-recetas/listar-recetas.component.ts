import { Component } from '@angular/core';
import { Recetas } from './recetas.model';

@Component({
  selector: 'app-listar-recetas',
  templateUrl: './listar-recetas.component.html',
  styleUrls: ['./listar-recetas.component.css']
})
export class ListarRecetasComponent {

  BD_Recetas:Recetas[]=[];
}
