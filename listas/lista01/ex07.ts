// Lista 01 — Exercício 07
// Enunciado: Leia duas notas e mostre a média entre elas.

const digiteN1:string = prompt("Digite a primeira nota: ")?? "0";
const digiteN2:string = prompt("Digite a segunda nota: ")?? "0";

const N1:number = Number(digiteN1);
const N2:number = Number(digiteN2);
const media:number = (N1 + N2)/2;

alert(`Notas ${N1} e ${N2} -> média ${media}.`);