// Lista 01 — Exercício 11
// Enunciado: Leia as 4 notas de um aluno e mostre a média final.

const digN1:string = prompt("Digite a primeira nota: ") ?? "0";
const digN2:string = prompt("Digite a segunda nota: ") ?? "0";
const digN3:string = prompt("Digite a terceira nota: ") ?? "0";
const digN4:string = prompt("Digite a quarta nota: ") ?? "0";

const nota1:number = Number(digN1); 
const nota2:number = Number(digN2); 
const nota3:number = Number(digN3); 
const nota4:number = Number(digN4); 
const media4:number = (nota1 + nota2 + nota3 + nota4)/4

alert(`${nota1}, ${nota2}, ${nota3}, ${nota4} -> média ${media4.toFixed(1)}`); 