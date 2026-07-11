// Lista 02 — Exercício 03
// Enunciado: Leia um número e diga se ele é par ou ímpar.
//8 → "8 é par" · 7 → "7 é ímpar".

const digNum:string = prompt("Digite um número: ") ?? "0";
const numero:number = Number(digNum);

if(numero % 2 == 0) {
    alert(`${numero} -> é par`)
} else {
    alert(`${numero} -> é impar`)
}