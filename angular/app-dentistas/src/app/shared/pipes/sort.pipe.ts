import { Pipe, PipeTransform } from '@angular/core';
import {Persona} from '../interfaces/persona';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Persona[], args: string, order?:string): Persona[] {
    let dir = 1;
    if(order)
      dir = order.toUpperCase() === 'ASC'? -1: 1;

    if(value){
      return value.sort((a:Persona, b:Persona) =>{
        if(a[args] < b[args]){
          return -1 * dir;
        }
        else if(b[args] < a[args]){
          return 1 * dir;
        }
        return 0;
      });
    }
  }

}
