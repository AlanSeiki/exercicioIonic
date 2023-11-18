import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.scss'],
})
export class Ex1Component  implements OnInit {
  distancia: number = 0;
  gasolina: number = 0;
  gasto: number = 0;
  mensagem: string = '';
  constructor() { }
  calcularGasto(){
    this.gasto = this.distancia/this.gasolina;
    if(this.gasto > 13){
      this.mensagem = `${this.gasto}Km/l Econômico`;
    }else if(this.gasto >= 10 && this.gasto <= 13){
      this.mensagem = `${this.gasto}Km/l Normal`;
    }else{
      this.mensagem = `${this.gasto}Km/l Gastador`;
    }
  }
  ngOnInit() {}

}
