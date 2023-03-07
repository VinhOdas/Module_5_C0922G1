import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-app',
  templateUrl: './calculator-app.component.html',
  styleUrls: ['./calculator-app.component.css']
})
export class CalculatorAppComponent implements OnInit {
  numberOne: number | undefined;
  numberTwo: number | undefined;
  result: number | string | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  sum($event: MouseEvent) {
    this.result = parseInt(String(this.numberOne)) + parseInt(String(this.numberTwo))


  }

  subtract($event: MouseEvent) {
    this.result = parseInt(String(this.numberOne)) - parseInt(String(this.numberTwo))

  }

  multiphie($event: MouseEvent) {
    this.result = parseInt(String(this.numberOne)) * parseInt(String(this.numberTwo))

  }

  division($event: MouseEvent) {
    if (this.numberTwo == 0) {
      this.result = "Số chia k được bằng 0";
    } else {
      this.result = parseInt(String(this.numberOne)) / parseInt(String(this.numberTwo));
    }
  }
}
