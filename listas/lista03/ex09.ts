// Lista 03 — Exercício 9
// Enunciado: Leia quantas notas, depois cada nota, e mostre a média com 1 casa decimal.
// 3 notas: 8, 6, 7 → média 7.0.

const notas = Number(prompt("Quantas notas serão digitadas: "));
let arrayNotas:number[] = [];

for(let i = 0; i < notas; i++) {
    let nota = Number(prompt(`Digite a nota ${i+1}`));
    arrayNotas.push(nota);
}

const mediaN:number = (arrayNotas.reduce((soma, n)=> soma + n))/arrayNotas.length;
alert(`${notas} notas: ${arrayNotas} -> média ${mediaN.toFixed(1)}`)