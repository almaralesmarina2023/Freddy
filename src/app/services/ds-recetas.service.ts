import { Injectable } from '@angular/core';
import { Receta } from '../models/recetas.model';
import { Ingredientes } from '../models/Ingredientes.model';

@Injectable({
  providedIn: 'root'
})
export class DsRecetasService {

  i:Ingredientes=new Ingredientes("sal","2 cucharadas");
  ingredientes1:Ingredientes[]=[this.i];
  ingredientes2:Ingredientes[]=[this.i];
  r1=new Receta("Pollo a la Gordon Blue","Freir por 30 min",this.ingredientes1,"./assets/chicharritas-platano-e1497017839458-150x150.jpg");
  r2=new Receta("Pescado Cubano ","Vuela y Vuelta 30 min",this.ingredientes2,"./assets/fritura-malanga-e1494857372839-150x150.jpg");
  
  
  DSarrayRecetas:Receta[]=[this.r1,this.r2];
  
  constructor() { }

  obtener_Receta(indice:number):Receta{
    return this.DSarrayRecetas[indice];
  }
  Adicionar_Receta(receta:Receta):void{
    this.DSarrayRecetas.push(receta);
  }
  EliminarReceta(posicion:number):void{
   
    this.DSarrayRecetas.splice(posicion,1);
  }
  ModificarReceta(posicion:number,receta:Receta):void{
    this.DSarrayRecetas[posicion]=receta;
  }
}

