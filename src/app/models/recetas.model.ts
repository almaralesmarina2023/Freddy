import { Ingredientes } from "./Ingredientes.model";

export class Receta{
   
    id:number=0;
    nombre:string="";
    metodo_preparacion:string="";
    ingredientes:Ingredientes[]=[];
    Img:string="";

    constructor(id:number=0,nombre:string="",metodo_preparacion:string="",ingredientes:Ingredientes[]=[],Img:string=""){
        this.id=id;
        this.nombre=nombre;
        this.metodo_preparacion=metodo_preparacion;
        this.ingredientes=ingredientes;
        this.Img=Img
    }

    getNombre():string{
        return this.nombre;
    }

}