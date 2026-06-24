// Lista 01 — Exercício 06
// Enunciado: Leia a base e a altura de um retângulo e mostre a área.

const digiteBase:string = prompt("Digite o valor da base do retângulo: ") ?? "0";
const digiteAltura:string = prompt("Digite o valor da altura do retângulo: ") ?? "0";

const base:number = Number(digiteBase);
const altura:number = Number(digiteAltura);
const area:number = base*altura;

alert(`Base ${base}, altura ${altura} -> area ${area}.`)
