import { Component, DoCheck, OnInit } from '@angular/core';
import { Receta } from '../../models/recetas.model';
import { DsRecetasService } from '../../services/ds-recetas.service';

import { FormsModule } from '@angular/forms';
import { RecetasComponent } from '../recetas/recetas.component';
import { FiltroRecetaPipe } from 'src/app/pipes/filtro-receta.pipe';


@Component({
  selector: 'app-listar-recetas',
  standalone:true,
  imports: [FormsModule, RecetasComponent,FiltroRecetaPipe],
  templateUrl: './listar-recetas.component.html',
  styleUrls: ['./listar-recetas.component.css']
})
export class ListarRecetasComponent implements OnInit{

  BD_Recetas:Receta[]=[];
  filtroR:string=""
  constructor(private servicio:DsRecetasService){
   
  }

  ngOnInit(): void {
    this.BD_Recetas=this.servicio.getDatos();
  }
  
}
