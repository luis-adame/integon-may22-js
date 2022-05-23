import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],

})

export class ComponentOne {
  title = 'app-dentistas';

  departamento = "Aclaraciones"
  numero = '555-55-55';

  dato:string ="";



  demo():void{
    this.numero = "Modificado por click handler";
  }

  onClick($event){
    if($event)
      window.alert('Se presiono bien el boton');
    else
      window.alert('Se presiono mal el boton');
  }
}
