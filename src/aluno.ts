/* 
Crie uma classe Aluno com os atributos Nome, Idade, Nota e Status. 

Crie uma lista com pelo menos 7 alunos. 

Depois crie uma lista de 10 elementos que sirva de gabarito de uma prova.

Percorra a lista de alunos e aleatoriamente sorteie as respostas para os alunos (simulando como se o aluno estivesse marcando a resposta da pergunta).

Contabilize a nota do aluno comparando a resposta que foi sorteada com o gabarito da prova. 

Cada acerto vale 1 ponto

Atualize o status do aluno para aprovado caso o aluno tenha uma nota maior ou igual a 6 e reprovado caso a nota for menor que 6.

No final mostre os alunos aprovados, reprovados, média das notas, o melhor aluno (aluno com nota mais alta) e o pior aluno (aluno com a nota mais baixa).
 */

import { gabarito } from "./gabarito";

enum StatusProva {
  Aprovado = "Aprovado",
  Reprovado = "Reprovado",
}

export class Aluno {
  public nota: number;
  public status: StatusProva;

  constructor(public nome: string, public idade: number) {
    this.nota = 0;
    this.status = StatusProva.Reprovado;
  }

  public realizarProva() {
    this.nota = 0;
    this.status = StatusProva.Reprovado;
    gabarito.forEach((item) => {
      if (item === this.gerarResposta()) {
        this.nota += 1;
      }
    });

    if (this.nota >= 6) {
      this.status = StatusProva.Aprovado;
    }
  }

  private gerarResposta(): string {
    const generateResposta = Math.floor(Math.random() * 10) % 3;

    let letterSort = "";

    switch (generateResposta) {
      case 0: {
        letterSort = "A";
        break;
      }
      case 1: {
        letterSort = "B";
        break;
      }
      case 2: {
        letterSort = "C";
        break;
      }
    }
    return letterSort;
  }

  public toJson() {
    return {
      nome: this.nome,
      nota: this.nota,
      status: this.status,
    };
  }


}
