import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex5',
  templateUrl: './ex5.component.html',
  styleUrls: ['./ex5.component.scss'],
})
export class Ex5Component  implements OnInit {
  numero1: number = 0;
  numero2: number = 0;
  operacao: string = 'soma';
  resultado: string = '';
  valor: number = 0;
  constructor() { }
  
  calcular(){
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
