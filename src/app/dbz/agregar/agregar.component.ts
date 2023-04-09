import { Component,EventEmitter,Input, Output} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DBZService } from '../services/dbz.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent  {
  @Input('nuevoPersonaje') nuevo:Personaje={
    nombre:'',
    poder:0
  };

  constructor(private dbzService: DBZService){
  }
  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar():void{
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }

    //emito el nuevo personaje al padre para agregarlo a personajes
    //this.onNuevoPersonaje.emit(this.nuevo);

    //llamo el metodo del servicio para agregar la data

    this.dbzService.agregarPersonaje(this.nuevo);
    //limpio objeto
    this.nuevo={
      nombre:'',
      poder:0
    }
  }

}
