import{ Component } from '@angular/core'

@Component({
  selector: 'app-tercero',
  template:`<h1>Este es el componente tercero {{text}}</h1>`
})

export class Tercero{
  text = "asdf";
}
