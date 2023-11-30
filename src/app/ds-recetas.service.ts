import { Injectable } from '@angular/core';
import { Recetas } from './listar-recetas/recetas.model';

@Injectable({
  providedIn: 'root'
})
export class DsRecetasService {

  ingredientes1:string[]=["sal","pollo","harina"];
  ingredientes2:string[]=["sal","pollo","harina"];
  r1=new Recetas("Pollo a la Gordon Blue","Freir por 30 min",this.ingredientes1);
  r2=new Recetas("Pollo a la Gordon Blue","Freir por 30 min",this.ingredientes2);
  
  
  DSarrayRecetas:Recetas[]=[this.r1,this.r2];
  
  constructor() { }
}


