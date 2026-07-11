// Lista 03 — Exercício 10
// Enunciado: Leia quantos números e depois cada um. No fim, diga qual foi o maior.
// 4, 9, 2, 7 → o maior é 9.

const digQ = Number(prompt("Quantos números serão digitadas: "));
let arrayN:number[] = [];

for(let i = 0; i < digQ; i++) {
    let num = Number(prompt(`Digite o número ${i+1}`));
    arrayN.push(num);
}

let maior:number = arrayN[0];
arrayN.forEach(num => {if(num > maior){maior=num}});

alert(`${arrayN} -> o maior é o ${maior}`)
