import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.scss'],
})
export class Ex2Component  implements OnInit {
  dataNascimento: string = '';
  resultado: string = '';
;
  constructor() { }

  calcularIdade() {
    if (this.dataNascimento) {
      const dataNascimento = new Date(this.dataNascimento);
      const anoAtual = new Date().getFullYear();

      if (dataNascimento.getFullYear() <= anoAtual) {
        const idade = anoAtual - dataNascimento.getFullYear();
        this.resultado = `${idade} anos - ${this.getClassificacao(idade)}`;
      } else {
        this.resultado = 'Data de nascimento inválida';
      }
    } else {
      this.resultado = 'Por favor, informe a data de nascimento';
    }
  }

  getClassificacao(idade: number): string {
    if (idade < 12) {
      return 'Criança';
    } else if (idade >= 13 && idade < 18) {
      return 'Adolescente';
    } else if (idade >= 18 && idade < 60){
      return 'Adulto';
    }else{
      return 'Idoso'
    }
  }

  limparCampos() {
    this.dataNascimento = '';
    this.resultado = '';
  }
  ngOnInit() {}

}
