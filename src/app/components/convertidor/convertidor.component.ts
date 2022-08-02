import { Component, OnInit } from '@angular/core';
import { BrowserStack } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {

  cantidad = 0;
  tengo = 'USD';
  quiero = 'EUR';
  total = 0;

  monedas: string[] = ['USD', 'EUR', 'LIBRA']

  constructor() { }

  ngOnInit(): void {
  }

  convertir() {
    switch(this.tengo) {
      case 'USD':
        if(this.quiero === 'USD'){
          this.total = this.cantidad;
        }
        if (this.quiero === 'EUR'){
          this.total = this.cantidad * 0.98
        }
        if (this.quiero === 'LIBRA'){
          this.total = this.cantidad * 0.83
        }
        break;
      case 'EUR':
        if(this.quiero === 'USD'){
          this.total = this.cantidad * 1.02;
        }
        if (this.quiero === 'EUR'){
          this.total = this.cantidad 
        }
        if (this.quiero === 'LIBRA'){
          this.total = this.cantidad * 0.85
        }
        break;
      case 'LIBRA':
        if(this.quiero === 'USD'){
          this.total = this.cantidad * 1.2048
        }
        if (this.quiero === 'EUR'){
          this.total = this.cantidad * 1.1765
        }
        if (this.quiero === 'LIBRA'){
          this.total = this.cantidad 
        }
        break;
    }
  }

}
