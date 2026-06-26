// Lista 01 — Exercício 20
// Enunciado: Leia o salário bruto. Desconte INSS 11%, IR 7,5% e VT 6%, e mostre cada desconto e o líquido. 
//bruto 3000 → INSS 330, IR 225, VT 180, líquido 2265.

const digSalarioBruto:string = prompt("Digite o salário bruto: ")?? "0";
const salarioBruto:number = Number(digSalarioBruto);

const INSS:number = salarioBruto*0.11;
const IR:number = salarioBruto*0.075;
const VT:number = salarioBruto*0.06;

alert(`Bruto ${salarioBruto} -> INSS R$${INSS.toFixed(2)}, IR R$${IR.toFixed(2)}, VT R$${VT.toFixed(2)}, líquido R$${(salarioBruto-INSS-IR-VT).toFixed(2)}`);