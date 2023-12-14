import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DsRecetasService } from '../../services/ds-recetas.service';
import { Receta } from '../../models/recetas.model';
import { Ingredientes } from '../../models/Ingredientes.model';

@Component({
  selector: 'app-adicionar-receta',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './adicionar-receta.component.html',
  styleUrl: './adicionar-receta.component.css'
})
export class AdicionarRecetaComponent {
  nombre_agg:string="";
  metodo_preparacion_agg:string="";
  ingrediente!:Ingredientes;
  ingredientes_agg:Ingredientes[]=[];
  Img_agg:string="./assets/fritura-malanga-e1494857372839-150x150.jpg";

  constructor(private acceso:DsRecetasService){}
  CapturarIngrediente():void{
    if(this.ingrediente.nombre!="")
    this.ingredientes_agg.push(this.ingrediente);
  }

  AdicionarReceta():void{
    
    let temp_receta=new Receta(this.nombre_agg,this.metodo_preparacion_agg,this.ingredientes_agg,this.Img_agg);
    this.acceso.Adicionar_Receta(temp_receta);
    this.nombre_agg="";
    this.metodo_preparacion_agg="";
    this.ingrediente.nombre="";
    this.ingredientes_agg=[];
  }


}
