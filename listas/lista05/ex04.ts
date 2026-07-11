// Lista 02 — Exercício 04
// Enunciado: Leia um número e diga se é positivo (≥ 0) ou negativo.
// 5 → "Positivo" · -3 → "Negativo".

const digNumber:string = prompt("Digite um número: ") ?? "0";
const number:number = Number(digNumber);

if(number >= 0) {
    alert(`${number} -> é positivo`)
} else {
    alert(`${number} -> é negativo`)
}