import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';


@Injectable()
export class DBZService{

  private _personajes: Personaje[]=[
    // "_" estandar para indicar que es propiedad privada
    {
      nombre:'Goku',
      poder:15000
    },
    {
      nombre:'Vegeta',
      poder:13000
    }
  ];

  get personajes():Personaje[]{
    return [...this._personajes];
  }

  constructor(){
  }

  agregarPersonaje(nuevoPersonaje:Personaje){
    this._personajes.push(nuevoPersonaje);
  }
}
