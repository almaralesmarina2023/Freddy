import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DsRecetasService } from '../../services/ds-recetas.service';
import { Receta } from '../../models/recetas.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ingredientes } from '../../models/Ingredientes.model';

@Component({
  selector: 'app-modificar-receta',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './modificar-receta.component.html',
  styleUrl: './modificar-receta.component.css'
})
export class ModificarRecetaComponent {
  indice:number=0;
  d_id:number=0;
  d_Receta!:Receta;
  d_nombre:string="";
  d_metodo:string="";
  d_Img:string="";
  d_Ingredientes:Ingredientes[]=[];
  
  constructor(private route:ActivatedRoute, private ds_servicio:DsRecetasService, private router:Router)
  {
    this.indice=this.route.snapshot.params['id'];
    this.d_Receta=this.ds_servicio.obtener_Receta(this.indice);
    this.d_id=this.d_Receta.id;
    this.d_nombre=this.d_Receta.nombre;
    this.d_metodo=this.d_Receta.metodo_preparacion;
    this.d_Img=this.d_Receta.Img;
    this.d_Ingredientes=this.d_Receta.ingredientes;
  } 

  Modificar():void{
   let r:Receta=new Receta(this.d_id,this.d_nombre,this.d_metodo,this.d_Ingredientes,this.d_Img);
   this.ds_servicio.ModificarReceta(this.indice,r);
   this.router.navigate(['']);
  }
}
