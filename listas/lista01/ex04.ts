// Lista 01 — Exercício 04
// Enunciado: Leia um número e mostre o dobro, o triplo e a metade dele.

const digiteNum2:string = prompt("Digite um número: ")?? "0";

const num2:number = Number(digiteNum2);

const dobro:number = num2*2;
const triplo:number = num2*3;
const metade:number = num2/2;

alert(`O dobro de ${num2} é ${dobro}, o triplo é ${triplo} e a metade é ${metade}`);