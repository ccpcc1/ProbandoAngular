import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {

  get personajes(){
    return this.dbzService.personajes;
  }
 // @Input() personajes: Personaje[] = [];


  constructor(private dbzService:DBZService){
  }


}
