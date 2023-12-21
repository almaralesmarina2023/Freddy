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
  // ngDoCheck(): void {
  //   alert(this.servicio.DSarrayRecetas+"  docheck")
  // }

  ngOnInit(): void {
    this.getRecetasenListar();
    //alert("acabo de cargar el componente"+this.servicio.DSarrayRecetas)
  }
  
  getRecetasenListar():void{
    let obs$=this.servicio.getDatos();
   // alert("en listar"+this.servicio.DSarrayRecetas)
    obs$.subscribe(datos=>{this.BD_Recetas=datos;});
   // alert("en listar despues de subscribir"+this.servicio.DSarrayRecetas)
    //alert(this.BD_Recetas + "despues de get receta")
  }

}
