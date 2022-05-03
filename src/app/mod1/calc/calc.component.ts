import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  template: `
  <h1>Decimal to Octal Converter</h1>
  <label>Enter decimal:</label>
  <div>
  <input type="number" #box/>
  </div>
  <button (click)="decToOctal(box.value)"> CONVERT </button>
  <label> {{value}} </label>
  `,
  styles: [
    ``
  ]
})
export class CalcComponent {
  num: any;
  value="";

  decToOctal(val:string) {
    console.warn(val);
    this.num = parseInt(val);
    let octalNum = new Array(100);
  
      // counter for octal number array
      let i = 0;
      while (this.num != 0) {
    
  
          // storing remainder in octal array
          octalNum[i] = this.num % 8;
          this.num = Math.floor(this.num / 8);
          i++;
      }
      // printing octal number array in reverse order
      for (let j = i - 1; j >= 0; j--){
        this.value += octalNum[j] +"";
        
      }
    
  }
}

