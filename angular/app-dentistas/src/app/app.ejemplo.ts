import{ Component } from '@angular/core'

@Component({
  selector: 'app-ejemplo',
  template:`
    <h1>Este es el componente ejemplo {{text}}</h1>
    <app-tercero></app-tercero>
  `
})

export class Ejemplo{
  text = "asdf";
}
