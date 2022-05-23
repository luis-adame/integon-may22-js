import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  // template: `
  //   <div>Contador: {{contador}}</div>
  //   <button (click)="incrementar()">Incrementar</button>
  //   <button (click)="decrementar()">Decrementar</button>
  // `,
  styleUrls: ['./counter.component.sass']
})
export class CounterComponent implements OnInit {
  contador = 0;

  constructor() { }

  ngOnInit(): void {
  }

  incrementar(){
    this.contador+=1;
  }

  decrementar(){
    this.contador-=1;
  }
}
