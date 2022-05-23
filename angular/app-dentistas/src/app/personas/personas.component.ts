import { Component, OnInit } from '@angular/core';
import {PersonasService} from '../personas.service';
import {Persona} from '../shared/interfaces/persona';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.sass'],
  providers:[PersonasService]
})
export class PersonasComponent implements OnInit {

  personas:Persona[] = [];
  // public personas = [
  //   {id: 1, nombre:"Luis", apellido:"Adame", ciudad:"Tijuana", moneda:"10000"},
  //   {id: 2, nombre:"Aaron", apellido:"Echanove", ciudad:"Mexicali", moneda:"20000"},
  //   {id: 3, nombre:"Gabriel", apellido:"Mendez", ciudad:"Tecate", moneda:"30000"}
  // ];
  constructor(private personasService: PersonasService){}

  ngOnInit(){
    //this.personas = this.personasService.getPersonas();
    // this.personasService.getPersonas().subscribe({  //regresa un observable que usa subscribe para extraer los datos
    //   next: data => {
    //     this.personas = data.personas,
    //     console.log(`Personas: ${this.personas}`)
    //   }
    // });

    this.personasService.getPersonas().subscribe(data => this.personas = data["personas"]);
  }

}
