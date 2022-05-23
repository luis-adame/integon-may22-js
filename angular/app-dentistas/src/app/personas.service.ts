import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Persona} from '../app/shared/interfaces/persona';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private http:HttpClient) { }

  //getPersonas():Persona[]{
  // getPersonas():any{
  //   //let personas:Persona[] = [
  //     // {id: 1, nombre:"Luis", apellido:"Adame", ciudad:"Tijuana", moneda:10000},
  //     // {id: 2, nombre:"Aaron", apellido:"Echanove", ciudad:"Mexicali", moneda:20000},
  //     // {id: 3, nombre:"Gabriel", apellido:"Mendez", ciudad:"Tecate", moneda:30000},
  //     // {id: 4, nombre:"Victor", apellido:"Lopez", ciudad:"Ensenada", moneda:40000},
  //     // {id: 3, nombre:"Gerardo", apellido:"Ortiz", ciudad:"Rosarito", moneda:50000}
  //   //];

  //   const request$ = new Observable(observer => {
  //     const url = "http://localhost:3005/personas";
  //     const request = new XMLHttpRequest();

  //     request.addEventListener("load", () => {
  //       if (request.readyState === 4 && request.status === 200) {
  //         observer.next(JSON.parse(request.responseText));
  //         observer.complete();
  //       } else {
  //         observer.error('An error has occured');
  //       }
  //     });
  //     request.open("GET", url);
  //     request.send();
  //   });

  //   //request$.toPromise().then((data) => console.log(data));

  //   //return personas;
  //   return request$;
  // }

  getPersonas(): Observable<Persona[]>{
    return this.http.get<Persona[]>('http://localhost:3005/personas')
      .pipe(
        catchError((error: HttpErrorResponse) =>{
          console.log(`Ocurrio un error ${error}`);
          return throwError(error);
        })
      );
  }
}
