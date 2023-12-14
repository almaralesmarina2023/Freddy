import { Ingredientes } from "./Ingredientes.model";

export class Receta{
   
    nombre:string="";
    metodo_preparacion:string="";
    ingredientes:Ingredientes[]=[];
    Img:string="";

    constructor(nombre:string="",metodo_preparacion:string="",ingredientes:Ingredientes[]=[],Img:string=""){
        this.nombre=nombre;
        this.metodo_preparacion=metodo_preparacion;
        this.ingredientes=ingredientes;
        this.Img=Img
    }

    getNombre():string{
        return this.nombre;
    }

}