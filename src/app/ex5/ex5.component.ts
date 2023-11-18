import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex5',
  templateUrl: './ex5.component.html',
  styleUrls: ['./ex5.component.scss'],
})
export class Ex5Component  implements OnInit {
  numero1?: number;
  numero2?: number;
  operacao: string = 'soma';
  resultado: string = '';
  valor: number = 0;
  constructor() { }
  
  calcular(){
    if (this.numero1 === undefined) {
      this.numero1 = 1
    } 
    if (this.numero2 === undefined) {
      this.numero2 = 1
    } 
    if(this.operacao == 'soma'){
      this.valor = this.numero1+this.numero2;
      this.resultado = `${this.valor}`;
    }else if(this.operacao == 'divisao'){
      this.valor = this.numero1/this.numero2;
      this.resultado = `${this.valor}`;
    }else if(this.operacao == 'multiplicacao'){
      this.valor = this.numero1*this.numero2;
      this.resultado = `${this.valor}`;
    }else {
      this.valor = this.numero1-this.numero2;
      this.resultado = `${this.valor}`;
    }
  }

  limpar(){
   this.numero1 = 0;
   this.numero2= 0;
   this.operacao = 'soma';
   this.resultado = '';
   this.valor = 0;
  }
  ngOnInit() {}

}
