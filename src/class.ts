/* 
3. Crie uma classe chamada Pessoa que contém os seguintes
atributos: nome (string) e idade (number), que receba esses valores
pelo construtor. Depois crie uma lista de Pessoa com algumas
idades diferentes e por fim crie uma nova lista a partir dessa lista
inicial utilizando o filter somente com as pessoas que possuem a
idade menor que 23.
 */

export class Pessoa {
  constructor(public nome: string, public idade: number, public salario: number) {}
}
