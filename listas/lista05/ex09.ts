// Lista 02 — Exercício 09
// Enunciado: Leia um número e diga se é positivo, negativo ou zero.
// 5 → "Positivo" · -2 → "Negativo" · 0 → "Zero".

const digNumN:string = prompt("Digite um número: ") ?? "0";
const numN:number = Number(digNumN);

if(numN == 0) {
    alert(`${numN} -> é zero`)
} else if(numN > 0) {
    alert(`${numN} -> é positivo`)
} else {
    alert(`${numN} -> é negativo`)
}