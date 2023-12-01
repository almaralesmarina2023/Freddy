import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recetas } from '../listar-recetas/recetas.model';
import { DsRecetasService } from '../ds-recetas.service';

@Component({
  selector: 'app-detalles-recetas',
  templateUrl: './detalles-recetas.component.html',
  styleUrls: ['./detalles-recetas.component.css']
})
export class DetallesRecetasComponent {
indice:number=0;
d_nombre:string="";
d_metodo:string="";
d_Ingredientes:string[]=[];
d_Img:string="";
d_Receta:Recetas=new Recetas;
constructor(private route:ActivatedRoute, private ds_servicio:DsRecetasService)
{
  this.indice=this.route.snapshot.params['id'];
  this.d_Receta=this.ds_servicio.obtener_Receta(this.indice);
  this.d_nombre=this.d_Receta.nombre;
  this.d_metodo=this.d_Receta.metodo_preparacion;
  this.d_Img=this.d_Receta.Img;
  this.d_Ingredientes=this.d_Receta.ingredientes;
} 
}
