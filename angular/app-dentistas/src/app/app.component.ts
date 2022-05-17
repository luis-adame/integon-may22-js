import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class ComponentOne {
  title = 'app-dentistas';

  nombre = 'Luis';
  apellido = 'Adame';
  numero = '555-55-55';
}
