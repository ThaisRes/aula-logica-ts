// Lista 01 — Exercício 14
// Enunciado: Leia um total de segundos e mostre quantos minutos e segundos são — com divisão inteira e resto.

const digSeg:string = prompt("Digite o total de segundos: ")?? "0";
const seg:number = Number(digSeg);
const min:number = Math.floor(seg/60);
const segResto:number = seg%60;

alert(`${seg} s -> ${min} min e ${segResto} s`);