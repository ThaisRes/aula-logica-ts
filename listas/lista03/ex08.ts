// Lista 03 — Exercício 8
// Enunciado: Pergunte quantos números serão digitados. Depois leia cada um e mostre a soma total. for, prompt dentro do laço, acumulador
// 3 números: 10, 20, 5 → soma 35.
const nuM = Number(prompt("Quantos números serão digitados?") ?? "0");
let todos:number[] = [];

for(let i = 0; i < nuM; i++){
    let n = Number(prompt(`Digite o número ${i+1}: `) ?? "0");
    todos.push(n);
}

let plus:number = todos.reduce((total, atual) => total + atual);

alert(`${nuM} números: ${todos} -> soma ${plus}`);