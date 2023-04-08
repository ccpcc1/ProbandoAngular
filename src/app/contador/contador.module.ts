import {NgModule} from '@angular/core'
import { ContadorComponent } from './contador/contador.Component';

@NgModule({
  declarations:[ //lo que va a tener el modulo por dentro
    ContadorComponent
  ],
  exports:[ //los componentes que puede visualizar la app principal o que necesite ver
    ContadorComponent
  ]
})

export class ContadorModule{

}
