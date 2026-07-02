// Lista 02 — Exercício 05
// Enunciado: Leia dois números e diga qual é o maior.
// 7 e 3 → "O maior é 7".

const digNum1:string = prompt("Digite o primeiro número: ") ?? "0";
const n1:number = Number(digNum1);

const digNum2:string = prompt("Digite o segundo número: ") ?? "0";
const n2:number = Number(digNum2);

if(n1 > n2) {
    alert(`${n1} e ${n2}-> o maior é o ${n1}`)
} else {
    alert(`${n1} e ${n2}-> o maior é o ${n2}`)
}