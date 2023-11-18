import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.component.html',
  styleUrls: ['./ex3.component.scss'],
})
export class Ex3Component{
  altura?: number;
  peso?: number;
  imc: number = 0;
  classificacao: string ="";
  constructor() {
  }
  calculaIMC(){
    if (this.altura === undefined) {
      this.altura = 1
    } 
    if (this.peso === undefined) {
      this.peso = 1
    }
    this.imc = this.peso/(this.altura*this.altura);
    console.log(this.peso);
    console.log(this.altura);
    console.log(this.imc);

    if (this.imc<16) {
      this.classificacao = `${this.imc} Magreza Grave`;
    }else if(this.imc>16 && this.imc <17){
      this.classificacao = `${this.imc} Magreza Moderada`;
    }else if(this.imc>=17 && this.imc <18.5){
      this.classificacao = `${this.imc} Magreza leve`;
    }else if(this.imc>=18.5 && this.imc <25){
      this.classificacao = `${this.imc} Saudável`;
    }else if(this.imc>=25 && this.imc <30){
      this.classificacao = `${this.imc} Sobrepeso`;
    }else if(this.imc>=30 && this.imc <35){
      this.classificacao = `${this.imc} Obsidade Grau 1`;
    }else if(this.imc>=35 && this.imc <40){
      this.classificacao = `${this.imc} Obsidade Grau 2`;
    }else{
      this.classificacao = `${this.imc} Obsidade Grau 3`;
    }
    }

}
