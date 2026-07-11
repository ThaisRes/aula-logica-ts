// Lista 03 — Exercício 14
// Enunciado: Leia quantos números e cada um. No fim, diga quantos foram pares e quantos ímpares. Dois contadores!
// 4, 7, 2, 9, 6 → 3 pares e 2 ímpares.

const digQuantos = Number(prompt("Quantos números serão digitados: "));
let contadorPar:number =0;
let contadorImpar:number = 0;
let arrayNum:number[] = [];

for(let i = 0; i < digQuantos; i++){
    let n = Number(prompt(`Digite o ${i+1}° número:`));
    arrayNum.push(n);
    if(n %2 === 0){
        contadorPar = contadorPar +1;
    } else {
        contadorImpar = contadorImpar +1;
    }
}
alert(`${arrayNum} -> ${contadorPar} pares e ${contadorImpar} ímpares.`)