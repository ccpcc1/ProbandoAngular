import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.Component.html'
  //la diferencia con la propiedad templateUrl y template es que esta ultima puede poner el html directo en el template

})
export class AppComponent {
  titulo: string = 'contador App';
  numero: number = 10;
  base: number= 5;

  acumular(valor:number){
    this.numero+=valor;
  }

}
