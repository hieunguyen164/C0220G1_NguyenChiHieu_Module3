import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  firstNum: number;
  secondNum: number;
  result: number;
  operator = '+';
  changeOperator(value){
    this.operator = value;
  }

  calculate() {
    switch (this.operator) {
      case '+':
        this.result = this.firstNum + this.secondNum;
        break;
      case '-':
        this.result = this.firstNum - this.secondNum;
        break;
      case '*':
        this.result = this.firstNum * this.secondNum;
        break;
      case '/':
        this.result = this.firstNum / this.secondNum;
        break;
    }
  }
  constructor() {
  }
  ngOnInit(): void {
  }

}
