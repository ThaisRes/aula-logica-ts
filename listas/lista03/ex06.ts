// Lista 03 — Exercício 6
// Enunciado: Leia um nome e quantas vezes repetir. Escreva o nome esse tanto de vezes.
// Kaique, 3 → Kaique / Kaique / Kaique.

const nomeX:string = prompt("Digite o nome:") ?? "0";
const digNumX:string = prompt("Digite o número de repetições:") ?? "0";
const numX:number = Number(digNumX);
let repet:string = "";

for(let i=0; i < numX; i++) {
    repet = repet + " / " + nomeX;
}

alert(`${nomeX}, ${numX} -> ${repet}`)