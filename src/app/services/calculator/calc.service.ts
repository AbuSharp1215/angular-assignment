import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor() { }

  add(number1:number, number2:number):number{
    return number1+number2;
  }

  sub(number1:number, number2:number):number{
    return number1-number2;
  }

  mul(number1:number, number2:number):number{
    return number1*number2;
  }

  div(number1:number, number2:number):number{
    return number1/number2;
  }
}
