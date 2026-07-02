// Lista 02 — Exercício 10
// Enunciado: Leia dois números e diga se o 1º é maior, menor ou se são iguais.
// 7 e 3 → "7 é maior" · 2 e 2 → "São iguais".

const digNumber1:string = prompt("Digite o primeiro número: ") ?? "0";
const numN1:number = Number(digNumber1);

const digNumber2:string = prompt("Digite o segundo número: ") ?? "0";
const numN2:number = Number(digNumber2);

if(numN1 == numN2){
    alert(`${numN1} e ${numN2}-> São iguais`)
} else if(numN1 > numN2) {
    alert(`${numN1} e ${numN2}-> o maior é o ${numN1}`)
} else {
    alert(`${numN1} e ${numN2}-> o maior é o ${numN2}`)
}