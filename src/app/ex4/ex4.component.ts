import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex4',
  templateUrl: './ex4.component.html',
  styleUrls: ['./ex4.component.scss'],
})
export class Ex4Component  implements OnInit {
  novaTarefa: string = '';
  tarefas: any[] = [];
  constructor() { }

  adicionarTarefa() {
    if (this.novaTarefa && this.novaTarefa.trim() !== "") {
      this.tarefas.push({ nome: this.novaTarefa, concluida: false });
      this.novaTarefa = "";
    }
  }

  toggleConcluida(tarefa: any) {
    tarefa.concluida = !tarefa.concluida;
  }

  removerTarefa(tarefa: any) {
    this.tarefas = this.tarefas.filter(item => item !== tarefa);
  }
  ngOnInit() {}

}
