// Lista 03 — Exercício 3
// Enunciado: Leia um número e mostre a tabuada dele, de 1 a 10 — uma linha por multiplicação.
// 7 → 7 x 1 = 7, 7 x 2 = 14… até 7 x 10 = 70. for

const digNY:string = prompt("Digite um número para ver a tabuada: ") ?? "0";
const NY:number = Number(digNY);
let tabuada:string = "";

for(let i = 1; i <= 10; i++) {
    let calc:number = 0;
    calc = NY * i;
    tabuada = tabuada + `${NY} x ${i} = ${calc}\n `
}

alert(`Tabuada de ${NY} \n ${tabuada}`)