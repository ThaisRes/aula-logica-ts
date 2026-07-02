// Lista 02 — Exercício 16
// Enunciado: É bissexto se for divisível por 4 e não por 100 — ou se for divisível por 400. Leia o ano.
// 2024 → sim · 2023 → não · 2000 → sim · 1900 → não.

const digAno:string = prompt("Digite o ano com os 4 digitos para saber se é bissexto: ") ?? "0";
const ano:number = Number(digAno);

if((ano % 4 == 0 && ano % 100 !== 0) || ano % 400 == 0) {
    alert(`${ano} -> sim`)
} else {
    alert(`${ano} -> não`)
}