// Lista 01 — Exercício 16
// Enunciado: Leia o peso (kg) e a altura (m) e calcule o IMC = peso ÷ altura², com 2 casas.

const digPeso:string = prompt("Digite o peso em Kg: ")?? "0";
const digAltura:string = prompt("Digite a altura em metros: ")?? "0";
const peso:number = Number(digPeso);
const alturaIMC:number = Number(digAltura);
const IMC:number = peso/(alturaIMC*alturaIMC);

alert(`${peso} Kg, ${alturaIMC} m -> IMC ${IMC.toFixed(2)}.`);
