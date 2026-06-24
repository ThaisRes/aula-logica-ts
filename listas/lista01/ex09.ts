// Lista 01 — Exercício 09
// Enunciado: Leia a área de um terreno e o valor do m², e mostre o preço total.

const digiteArea:string = prompt("Digite a área do terreno em metros quadrados: ")?? "0";
const digiteValor:string = prompt("Digite o valor do metro quadrado: ")?? "0";

const areaT:number = Number(digiteArea);
const valorT:number = Number(digiteValor);
const precoT:number = areaT*valorT;

alert(`${areaT} x ${valorT} -> R$${precoT}`);