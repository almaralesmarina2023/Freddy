import { Component } from '@angular/core';
import { Recetas } from './recetas.model';
import { DsRecetasService } from '../ds-recetas.service';

import { FormsModule } from '@angular/forms';
import { RecetasComponent } from '../recetas/recetas.component';
import { FiltroRecetaPipe } from '../filtro-receta.pipe';

@Component({
  selector: 'app-listar-recetas',
  standalone:true,
  imports: [FormsModule, RecetasComponent,FiltroRecetaPipe],
  templateUrl: './listar-recetas.component.html',
  styleUrls: ['./listar-recetas.component.css']
})
export class ListarRecetasComponent {

  BD_Recetas:Recetas[]=[];
  filtroR:string=""
  constructor(private servicio:DsRecetasService){
    this.BD_Recetas=this.servicio.DSarrayRecetas;
  }
}
