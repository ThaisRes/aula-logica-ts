// Lista 01 — Exercício 03
// Enunciado: Leia um número inteiro e mostre o antecessor e o sucessor dele.

const digiteNum:string = prompt("Digite um número: ") ?? "0";
const num:number = Number(digiteNum);

const antecessor:number = num-1;
const sucessor:number = num+1;

alert(`O antecessor de ${num} é ${antecessor} e o suessor é ${sucessor}`)