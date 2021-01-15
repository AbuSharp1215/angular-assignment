import { Component, OnInit } from '@angular/core';
import { CalcService } from 'src/app/services/calculator/calc.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  n1:number;
  n2:number;
  
  res:number;

  constructor(private calc:CalcService) { }

  ngOnInit(): void {
  }

  addition(){
    this.res =  this.calc.add(this.n1,this.n2);
  }

  subtraction(){
    this.res = this.calc.sub(this.n1, this.n2);
  }

  multiplication(){
    this.res = this.calc.mul(this.n1, this.n2);
  }

  division(){
    this.res = this.calc.div(this.n1, this.n2);
  }

}
