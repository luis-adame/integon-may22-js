import { Injectable } from '@angular/core';
import {Vuelo} from '../app/shared/interfaces/vuelo';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VuelosService {
  vuelos:Vuelo[] =[];

  //constructor() { }
  constructor(private http:HttpClient) { }

  // getVuelos():Vuelo[]{
  //   this.vuelos = [
  //     {Numero: 1, Fecha: "01/01/22", Horario: "12:00a.m.", Origen: "Tijuana", Destino: "CDMX"},
  //   ];

  //   return this.vuelos;
  // }

  getVuelos(): Observable<Vuelo[]>{
    return this.http.get<Vuelo[]>('http://localhost:3005/vuelos')
  }

  // insertVuelo(vuelo:Vuelo):void{
  //   this.vuelos.push(vuelo);
  // }

  insertVuelo(vuelo:Vuelo): Observable<Vuelo>{
    alert(JSON.stringify(vuelo));
    return this.http.post<Vuelo>('http://localhost:3005/vuelos', vuelo);
  }
}
