// Lista 03 — Exercício 5
// Enunciado: Leia N e mostre todos os múltiplos de 5 de 1 até N. Dentro do laço, um if decide.
// N = 20 → 5 10 15 20.

const digMult:string = prompt("Digite um número para saber os multiplos de 5 desse número:") ?? "0";
const x1:number = Number(digMult);
const x1Corrigido:number = x1 - (x1 % 5);
let multiplos:string = "";

for(let i = 0; i <= x1Corrigido; i += 5){
    multiplos = multiplos + ` ${i} `;
}
alert(`N = x1 -> ${multiplos}`)