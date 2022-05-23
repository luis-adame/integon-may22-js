import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-matematico',
  templateUrl: './matematico.component.html',
  styleUrls: ['./matematico.component.sass']
})
export class MatematicoComponent implements OnInit {
  @Input() numero1:number=0;
  @Input() numero2:number=0;
  @Input() operacion:string="+";

  @Output() buttonClicked = new EventEmitter<boolean>();

  public resultado:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  // ngOnChanges(changes){
  //   this.ejecutarOperacion();
  // }

  emitirEvento(){
    this.ejecutarOperacion();
    this.buttonClicked.emit(true);
  }

  ejecutarOperacion():void{
    this.resultado=0;
    if(this.operacion === "+"){
      this.resultado = this.numero1+this.numero2;
    }
  }
}
