// Lista 01 — Exercício 19
// Enunciado: Leia um saque (inteiro) e mostre quantas notas de 100, 50, 20 e 10 entregar, usando o menor número de notas. saque 280 → 2×100, 1×50, 1×20, 1×10.

const digSaque:string = prompt("Digite o valor a ser sacado: ")?? "0";
const saque:number = Number(digSaque);

const nota100:number = Math.floor(saque/100);
const nota50:number = Math.floor((saque-(nota100*100))/50);
const nota20:number = Math.floor((saque-(nota100*100)-(nota50*50))/20);
const notaTen:number = Math.floor((saque-(nota100*100)-(nota50*50)-(nota20*20))/10);



alert(`saque ${saque} -> ${nota100}x100, ${nota50}x50, ${nota20}x20, ${notaTen}x10.`);



