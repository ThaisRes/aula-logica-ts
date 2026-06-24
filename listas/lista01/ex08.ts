// Lista 01 — Exercício 08
// Enunciado: Leia dois números e mostre a soma, a subtração, a multiplicação, a divisão e o resto.

const digiteC1:string = prompt("Digite o primeiro número: ")?? "0";
const digiteC2:string = prompt("Digite o segundo número: ")?? "0";

const C1:number = Number(digiteC1);
const C2:number = Number(digiteC2);

const somaC:number = C1+C2;
const subtrai:number = C1-C2;
const multip:number = C1*C2;
const divis:number = C1/C2;
const resto:number = C1%C2;

alert(`${C1} e ${C2} -> ${somaC}, ${subtrai}, ${multip}, ${divis} e resto ${resto}.`);
