// Lista 03 — Exercício 4
// Enunciado: Leia N e some todos os números de 1 até N. Use um acumulador.
// N = 5 → 1+2+3+4+5 = 15.

const digN:string = prompt("Digite um número: ") ?? "0";
const N:number = Number(digN);
let cont:string = "";
let calc:number = 0;

for(let i = 1; i <= N; i++) {
    calc = calc + i;
    cont = cont + `${i} +`;
}

alert(`N = ${N} -> ${cont} = ${calc}`);