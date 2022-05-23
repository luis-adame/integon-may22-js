import { Component, OnInit } from '@angular/core';
import {VuelosService} from '../../vuelos.service';
import {Vuelo} from '../../shared/interfaces/vuelo';

@Component({
  selector: 'app-vuelos',
  //templateUrl: './vuelos.component.html',
  template:`
  <div>
    <h2>Aerolinea</h2>
    <div>
      Numero: <input type="text" id="Numero" [(ngModel)]="numero">
      Fecha: <input type="text" id="Fecha" [(ngModel)]="fecha">
      Horario: <input type="text" id="Horario" [(ngModel)]="horario">
      Origen: <input type="text" id="Origen" [(ngModel)]="origen">
      Destino: <input type="text" id="Destino" [(ngModel)]="destino">
      <button (click)="registrar()">Registrar</button>
    </div>

    <table>
      <thead>
      <th>Index</th><th>Fecha</th><th>Horario</th><th>Origen</th><th>Destino</th>
      </thead>
      <tbody>
        <tr *ngFor="let vuelo of vuelos;index as myIndex" >
          <td>{{myIndex+1}}</td>
          <td>{{vuelo.Fecha }}</td>
          <td>{{vuelo.Horario}}</td>
          <td>{{vuelo.Origen}}</td>
          <td>{{vuelo.Destino}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  `,
  styleUrls: ['./vuelos.component.sass'],
  providers:[VuelosService]
})
export class VuelosComponent implements OnInit {

  numero:number;
  fecha:string = "";
  horario:string = "";
  origen:string = "";
  destino:string = "";

  vuelos:Vuelo[] = [];

  constructor(private vuelosService: VuelosService){}

  ngOnInit(): void {
    //this.vuelos = this.vuelosService.getVuelos();
    this.vuelosService.getVuelos().subscribe(data => this.vuelos = data);
  }

  registrar():void{
    let vuelo = {Numero: this.numero, Fecha: this.fecha, Horario: this.horario, Origen: this.origen, Destino: this.destino}
    //this.vuelosService.insertVuelo(this.numero, this.fecha, this.horario, this.origen, this.destino);
    this.vuelosService.insertVuelo(vuelo).subscribe(data =>{
      this.vuelos.push(vuelo)
    });
  }
}
