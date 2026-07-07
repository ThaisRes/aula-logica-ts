// Lista 03 — Exercício 1
// Enunciado: Leia um número N e escreva todos os números de 1 até N, um do lado do outro.
// N = 5 → 1 2 3 4 5.

const digNX:string = prompt("Digite um número para iniciar a contagem: ") ?? "0";
const NX:number = Number(digNX);
let contar:string = " ";

for(let i = 1; i <= NX; i++) {
    contar = contar + i + " "
}
alert(`N = ${NX} -> ${contar}`)
