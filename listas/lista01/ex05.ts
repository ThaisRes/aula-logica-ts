// Lista 01 — Exercício 05
// Enunciado: Receba um valor em reais e converta para dólar (US$ 1 = R$ 4,95).

const digiteReal:string = prompt("Digite o valor em reais usando ponto para separação dos centavos: ") ?? "0";
const real:number = Number(digiteReal);
const dolar:number = real/4.95;

alert(`R$${real} -> cerca de US$${dolar}`);
