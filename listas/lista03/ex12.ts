// Lista 03 — Exercício 12
// Enunciado: O fatorial de N (N!) é 1 × 2 × 3 × … × N. Leia N e calcule. Acumulador de multiplicação começa em 1!
// 5! = 1×2×3×4×5 = 120.

const leiaFat = Number(prompt("Digite o número para calcular o fatorial: "))
let arrayFat:number[] = [];

for(let i=1; i<=leiaFat; i++) {
    arrayFat.push(i);
}

let fatorial:number = arrayFat.reduce((a,b)=>a*b, 1);
alert(`${leiaFat}! = ${arrayFat.join (" x ")} = ${fatorial}`)