// Lista 01 — Exercício 18
// Enunciado: Leia um total de segundos e mostre em horas, minutos e segundos.

const digSegTotal:string = prompt("Digite o total em segundos: ")?? "0";
const segTotal:number = Number(digSegTotal);
const horas:number = Math.floor(segTotal/(60*60));
const minutos:number = Math.floor((segTotal/60) - (horas*60));
const segundos:number = segTotal%60;

alert(`${segTotal}s -> ${horas} h, ${minutos} min, ${segundos} s.`);
