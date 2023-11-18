import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.scss'],
})
export class Ex1Component  implements OnInit {
  distancia?: number;
  gasolina?: number;
  gasto: number = 0;
  mensagem: string = '';
  constructor() { }
  calcularGasto(){
    if (this.distancia === undefined) {
      this.distancia = 1
    } 
    if (this.gasolina === undefined) {
      this.gasolina = 1
    } 
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
