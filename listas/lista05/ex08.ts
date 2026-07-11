// Lista 02 — Exercício 08
// Enunciado: Leia um número e diga se é par, ímpar ou zero.
// 0 → "Zero" · 4 → "Par" · 7 → "Ímpar".

const digNumP:string = prompt("Digite um número: ") ?? "0";
const numP:number = Number(digNumP);

if(numP == 0) {
    alert(`${numP} -> é zero`)
}
else if(numP % 2 == 0) {
    alert(`${numP} -> é par`)
} else {
    alert(`${numP} -> é impar`)
}