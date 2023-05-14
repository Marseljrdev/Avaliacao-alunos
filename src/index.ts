import { Aluno } from "./aluno";

const alunos: Aluno[] = [
  new Aluno("Giadan", 25),
  new Aluno("Zaurandir", 21),
  new Aluno("Baraus", 23),
  new Aluno("Aransa", 20),
  new Aluno("Arfeuil", 18),
  new Aluno("Elesborn", 29),
  new Aluno("Torandir", 31),
];

//informacoes gerais como nome, nota e se foi aprovado
alunos.forEach((aluno) => {
  aluno.realizarProva();
  console.log(aluno.toJson());
});

//alunos aprovados
const alunosAprovados = alunos.filter((item) => item.status === "Aprovado");
const nomesAprovado = alunosAprovados.map((item) => item.nome);
if (nomesAprovado.length === 0) {
  console.log("Nenhum aluno foi aprovado. \n\n");
} else {
  console.log(`Alunos aprovados:\n${nomesAprovado.join(", ")}\n\n`);
}

//alunos reprovados
const alunosReprovados = alunos.filter((item) => item.status === "Reprovado");
const nomesReprovados = alunosReprovados.map((item) => item.nome);
if (nomesReprovados.length === 0) {
  console.log("Nenhum aluno foi reprovado. \n\n");
} else {
  console.log(`Alunos reprovados:\n${nomesReprovados.join(", ")}\n\n`);
}

//media das notaS
const totalAlunos = alunos.length;
const somaMedia = alunos.reduce((value, current) => value + current.nota, 0);
const mediaNotas = somaMedia / totalAlunos;
console.log("A media das notas é de: ", mediaNotas.toFixed(2), "\n\n");

//o melhor aluno
const melhorAluno = alunos.reduce((melhor, aluno) => {
  if (aluno.nota > melhor.nota) {
    return aluno;
  }
  return melhor;
});

console.log("Melhor aluno:", melhorAluno.toJson());

//pior aluno
const piorAluno = alunos.reduce((pior, aluno) => {
  if (aluno.nota < pior.nota) {
    return aluno;
  }
  return pior;
});

console.log("Pior aluno:", piorAluno.toJson());