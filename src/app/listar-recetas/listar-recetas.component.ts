import { Component } from '@angular/core';
import { Recetas } from './recetas.model';
import { DsRecetasService } from '../ds-recetas.service';

@Component({
  selector: 'app-listar-recetas',
  templateUrl: './listar-recetas.component.html',
  styleUrls: ['./listar-recetas.component.css']
})
export class ListarRecetasComponent {

  BD_Recetas:Recetas[]=[];
  constructor(private servicio:DsRecetasService){
    this.BD_Recetas=this.servicio.DSarrayRecetas;
  }
}
