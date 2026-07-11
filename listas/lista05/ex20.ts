// Lista 02 — Exercício 20
// Enunciado: Leia peso e altura, calcule o IMC (peso ÷ altura²) e classifique: abaixo (<18.5), normal (<25), sobrepeso (<30), obesidade (≥30).
// 70 kg, 1.75 m → IMC 22.9 → "Normal".

const digPesoX:string = prompt("Digite o peso em Kg: ")?? "0";
const digAlturaX:string = prompt("Digite a altura em metros: ")?? "0";
const pesoX:number = Number(digPesoX);
const alturaIMCX:number = Number(digAlturaX);
const IMCX:number = pesoX/(alturaIMCX*alturaIMCX);

if(IMCX < 18.5){
    alert(`${pesoX} Kg, ${alturaIMCX} m -> IMC ${IMCX.toFixed(2)} -> Abaixo`);
} else if(IMCX < 25){
    alert(`${pesoX} Kg, ${alturaIMCX} m -> IMC ${IMCX.toFixed(2)} -> Normal`);
} else if(IMCX < 30){
    alert(`${pesoX} Kg, ${alturaIMCX} m -> IMC ${IMCX.toFixed(2)} -> Sobrepeso`);
} else {
    alert(`${pesoX} Kg, ${alturaIMCX} m -> IMC ${IMCX.toFixed(2)} -> Obesidade`);    
}
