import { Injectable } from '@angular/core';
import { Recetas } from './listar-recetas/recetas.model';

@Injectable({
  providedIn: 'root'
})
export class DsRecetasService {

  ingredientes1:string[]=["sal","pollo","harina"];
  ingredientes2:string[]=["sal","pollo","harina"];
  r1=new Recetas("Pollo a la Gordon Blue","Freir por 30 min",this.ingredientes1,"./assets/chicharritas-platano-e1497017839458-150x150.jpg");
  r2=new Recetas("Pescado Cubano ","Vuela y Vuelta 30 min",this.ingredientes2,"./assets/fritura-malanga-e1494857372839-150x150.jpg");
  
  
  DSarrayRecetas:Recetas[]=[this.r1,this.r2];
  
  constructor() { }

  obtener_Receta(indice:number):Recetas{
    return this.DSarrayRecetas[indice];
  }
}


