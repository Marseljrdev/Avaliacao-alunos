import { Pessoa } from "./class";

const listNumber = [8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4];

const newListImpar = listNumber.filter((item) => item % 2 !== 0);
console.log("Os numeros impares sao: ", newListImpar, "\n\n");

const somaTotal = listNumber.reduce((previous, current) => {
  return previous + current;
});

console.log("A soma total da lista é: ", somaTotal, "\n\n");

const pessoas: Pessoa[] = [
  new Pessoa("João", 25, 1028),
  new Pessoa("Maria", 20, 985),
  new Pessoa("Pedro", 18, 1825),
  new Pessoa("Ana", 22, 1000),
];

const idadeMenor = pessoas.filter((item) => item.idade < 23);
console.log("Idade menor que 23: \n");
idadeMenor.forEach((item) => {
  console.log(`Nome: ${item.nome} \nIdade: ${item.idade}\n`);
});

const totalPessoas = pessoas.length;
const idadeMenor30 = pessoas.filter((item) => item.idade < 30);
const mediaIdade = idadeMenor30.reduce(
  (previous, current) => previous + current.idade,
  0
);
const calculaMedia = mediaIdade / totalPessoas;
console.log("A media de idade das pessoas é de: ", calculaMedia, "\n\n");

const salarioMenor = pessoas.filter((item) => item.salario < 1027);
const novaLista = salarioMenor.map((pessoa) => ({
  nome: pessoa.nome,
  idade: pessoa.idade,
  salario: pessoa.salario,
}));

console.log('Nova lista com pessoas que tem o salario menor que 1027')
console.log(novaLista);
