// Lista 02 — Exercício 06
// Enunciado: Leia um número e diga se ele é múltiplo de 3.
// 9 → "é múltiplo" · 10 → "não é".

const digNumM:string = prompt("Digite um número: ") ?? "0";
const numM:number = Number(digNumM);

if(numM % 3 == 0) {
    alert(`${numM} -> é múltiplo de 3`)
} else {
    alert(`${numM} -> não é múltiplo de 3`)
}