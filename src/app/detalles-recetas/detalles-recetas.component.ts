import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLink, Routes } from '@angular/router';
import { Recetas } from '../listar-recetas/recetas.model';
import { DsRecetasService } from '../ds-recetas.service';

import { FormsModule } from '@angular/forms';
import { Ingredientes } from '../modificar-receta/Ingredientes.model';

@Component({
  selector: 'app-detalles-recetas',
  standalone:true,
  imports: [FormsModule,RouterLink],
  templateUrl: './detalles-recetas.component.html',
  styleUrls: ['./detalles-recetas.component.css']
})
export class DetallesRecetasComponent {
indice:number=0;
d_nombre:string="";
d_metodo:string="";
d_Ingredientes:Ingredientes[]=[];
d_Img:string="";
d_Receta:Recetas=new Recetas;
constructor(private route:ActivatedRoute, private ds_servicio:DsRecetasService, private router:Router)
{
  this.indice=this.route.snapshot.params['id'];
  this.d_Receta=this.ds_servicio.obtener_Receta(this.indice);
  this.d_nombre=this.d_Receta.nombre;
  this.d_metodo=this.d_Receta.metodo_preparacion;
  this.d_Img=this.d_Receta.Img;
  this.d_Ingredientes=this.d_Receta.ingredientes;
} 

EliminarReceta(posicion:number):void{
  this.ds_servicio.EliminarReceta(posicion);
  this.router.navigate(['']);
      
}
Modificar():void{
  this.router.navigate(['/Modificar',this.indice]);
}
}
