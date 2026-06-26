// Lista 01 — Exercício 13
// Enunciado: Leia o salário e a porcentagem de aumento, e mostre o novo salário.

const digSalario:string = prompt("Digite o salário: ")?? "0";
const digPorcent:string = prompt("Digite a porcentagem de aumento: ")?? "0";

const salario:number = Number(digSalario);
const porcent:number = Number(digPorcent);
const aumento:number = salario*(1 + porcent/100);

alert(`R$${salario} + ${porcent}% -> R$${aumento.toFixed(2)}`);
