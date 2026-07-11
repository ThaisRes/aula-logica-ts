// Lista 03 — Exercício 7
// Enunciado: Leia N e mostre só os números pares de 1 até N.
//N = 10 → 2 4 6 8 10.

const leiaN:string = prompt("Digite um número para conhecer os pares:") ?? "0";
const nuN:number = Number(leiaN);
let acc:string = "";

for(let i = 0; i <= nuN; i+=2) {
    acc = acc + " " + i;
}

alert(`N = ${nuN} -> ${acc}`)
